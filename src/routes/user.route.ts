import express, { Request, Response } from "express";
import passport from "passport";
import { fbStrategy } from "@configs/facebook";
import {
  isLoggedIn,
  logout,
  postQuestions
} from "@controllers/user.controller";

const api = express.Router();

passport.use(fbStrategy);

api.route("/hello").get((req: Request, res: Response) => {
  res.send("Hello!");
});
api.route("/login/facebook").get(passport.authenticate("facebook"));
api
  .route("/login/facebook/callback")
  .get(
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    (_req, res) => {
      res.redirect("/instructions");
    }
  );
api.route("/logout").get(logout);
api.route("/questions").post(isLoggedIn, postQuestions);

export default api;
