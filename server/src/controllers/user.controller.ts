import passport from "passport";
import { Strategy } from "passport-facebook";
import { Request, Response } from "express";
import fbConfig from "@configs/facebook";
import User from "@models/user.model";

passport.use(
  new Strategy(fbConfig, async (accessToken, refreshToken, profile, done) => {
    User.findOne({ fbid: profile.id })
      .then(user => {
        if (!user) {
          let newUser = new User();
          newUser.fbid = profile.id;
          newUser.email = profile.emails[0].value;
          newUser.name = profile.displayName;
          newUser.gender = profile.gender;
          newUser.birthday = new Date(profile.birthday);

          newUser.auth.access_token = accessToken;
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
