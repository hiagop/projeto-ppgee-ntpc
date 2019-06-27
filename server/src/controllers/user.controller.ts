import passport from "passport";
import { Strategy, Profile } from "passport-facebook";
import { Request, Response } from "express";
import fbConfig from "@configs/facebook";
import User from "@models/user.model";
import axios from "axios";

passport.use(
  new Strategy(fbConfig, (accessToken, _refreshToken, profile, done) => {
    User.findOne({ fbid: profile.id })
      .then(async user => {
        if (!user) {
          const { clientID, clientSecret } = fbConfig;
          const fbGraphBaseUrl = `https://graph.facebook.com`;
          const fbGraphUrl = `/oauth/access_token?grant_type=fb_exchange_token&client_id=${clientID}&client_secret=${clientSecret}&fb_exchange_token=${accessToken}`;

          const fbGraphRes = await axios.get(fbGraphBaseUrl + fbGraphUrl);

          let newUser = new User({
            fbid: profile.id,
            email: profile.emails![0].value,
            name: profile.displayName,
            gender: profile.gender,
            birthday: new Date(profile.birthday),
            auth: {
              access_token: fbGraphRes.data.access_token,
              expires_on: new Date(fbGraphRes.data.expires_in)
            }
          });
          done(null, newUser);
        }
      })
      .catch(err => {
        done(err);
      });
  })
);

export function login(req: Request, res: Response) {}
export function fbLogin(req: Request, res: Response) {}
export function logout(req: Request, res: Response) {}
export function fbLoginCallback(req: Request, res: Response) {}
export async function postQuestions(req: Request, res: Response) {}
