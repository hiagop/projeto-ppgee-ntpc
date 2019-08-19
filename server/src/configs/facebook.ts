import axios from "axios";
import { Request } from "express";
import {
  Strategy,
  Profile,
  StrategyOptionWithRequest
} from "passport-facebook";
import User from "@models/user.model";

const fbConfig = {
  clientID: process.env.FB_CLIENT_ID || "",
  clientSecret: process.env.FB_CLIENT_SECRET || "",
  callbackURL: "/login/facebook/callback",
  passReqToCallback: true,
  profileFields: [
    "id",
    "name",
    "birhday",
    "gender",
    "email",
    "location",
    "hometown"
  ]
} as StrategyOptionWithRequest;

export const fbStrategy = new Strategy(
  fbConfig,
  async (
    req: Request,
    accessToken: string,
    _refreshToken: string,
    profile: Profile,
    done
  ) => {
    // check if user is already logged in
    if (req.user) {
      // if it is:
      done(null);
    } else {
      // if it isn't:
      let user = await User.findOne({ fbid: profile.id });
      // check if user is already registered
      if (!user) {
        // if it isn't:
        const { clientID, clientSecret } = fbConfig;
        const fbGraphBaseUrl = `https://graph.facebook.com`;
        const fbGraphUrl = `/oauth/access_token?grant_type=fb_exchange_token&client_id=${clientID}&client_secret=${clientSecret}&fb_exchange_token=${accessToken}`;
        // refresh its access token
        const fbResponse = await axios.get(fbGraphBaseUrl + fbGraphUrl);
        // create a new user document
        let newUser = new User({
          fbid: profile.id,
          email: profile.emails![0].value,
          name: profile.displayName,
          gender: profile.gender,
          birthday: new Date(profile.birthday),
          auth: {
            accessToken: fbResponse.data.access_token,
            expiryDate: new Date(fbResponse.data.expires_in)
          }
        });
        // and save it
        newUser = await newUser.save();
        if (newUser) {
          done(null, newUser);
        } else {
          return done(
            new Error("could not save new user to the database"),
            null
          );
        }
      } else {
        /* 
            TODO: check access token expiry date,
            and renew it in case it is about to expire
          */
        const { clientID, clientSecret } = fbConfig;
        const fbGraphBaseUrl = `https://graph.facebook.com`;
        const fbGraphUrl = `/oauth/access_token?grant_type=fb_exchange_token&client_id=${clientID}&client_secret=${clientSecret}&fb_exchange_token=${accessToken}`;
        const fbResponse = await axios.get(fbGraphBaseUrl + fbGraphUrl);

        user.auth.accessToken = fbResponse.data.access_token;
        user.auth.expiryDate = new Date(fbResponse.data.expires_in);

        user = await user.save();

        if (user) {
          done(null, user);
        } else {
          return done(
            new Error("could not save new user to the database"),
            null
          );
        }
      }
    }
  }
);
