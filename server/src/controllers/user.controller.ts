import passport from "passport";
import { Strategy, Profile } from "passport-facebook";
import { Request, Response } from "express";
import fbConfig from "@configs/facebook";

passport.use(
  new Strategy(
    fbConfig,
    (accessToken: string, refreshToken: string, profile: Profile) => {
      // TODO: renew accessToken and save it on db
    }
  )
);

export function login(req: Request, res: Response) {}
export function logout(req: Request, res: Response) {}
export function loginCallback(req: Request, res: Response) {}
export async function postQuestions(req: Request, res: Response) {}
