import axios from "axios";
import passport from "passport";
import { Request, Response } from "express";
import {
  Strategy,
  Profile,
  StrategyOptionWithRequest
} from "passport-facebook";
import User from "@models/user.model";
import fbConfig from "@configs/facebook";

passport.use(
  new Strategy(
    fbConfig as StrategyOptionWithRequest,
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
              access_token: fbResponse.data.access_token,
              expires_on: new Date(fbResponse.data.expires_in)
            }
          });
          // and save it
          newUser = await newUser.save();
          if (newUser) {
            done(null, newUser);
          } else {
            return done("could not save new user to the database");
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

          user.auth.access_token = fbResponse.data.access_token;
          user.auth.expires_on = new Date(fbResponse.data.expires_in);

          user = await user.save();

          if (user) {
            done(null, user);
          } else {
            return done("could not update existing user's access token");
          }
        }
      }
    }
  )
);

export function login(req: Request, res: Response) {}
export function fbLogin(req: Request, res: Response) {}
export function logout(req: Request, res: Response) {}
export function fbLoginCallback(req: Request, res: Response) {}
export async function postQuestions(req: Request, res: Response) {}
