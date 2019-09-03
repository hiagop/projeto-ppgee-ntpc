import passport from "passport";
import express, { Request, Response } from "express";
import { fbStrategy } from "@configs/facebook";
import {
  logout,
  isLoggedIn,
  postQuestions
} from "@controllers/user.controller";

const api = express.Router();

passport.use(fbStrategy);

api.route("/login/facebook").post(passport.authenticate("facebook"));
api
  .route("/login/facebook/callback")
  .post(
    passport.authenticate("facebook", { failureRedirect: "/login" }),
    (_req, res) => {
      res.redirect("/instructions");
    }
  );
api.route("/logout").get(logout);
api.route("/questions").post(isLoggedIn, postQuestions);

export default api;
