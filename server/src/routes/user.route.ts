import express from "express";
import passport from "passport";
import { fbStrategy } from "@configs/facebook";
import {
  isLoggedIn,
  logout,
  postQuestions
} from "@controllers/user.controller";

const api = express.Router();

passport.use(fbStrategy);

api.get("/login/facebook", passport.authenticate("facebook"));
api.get(
  "/login/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  (_req, res) => {
    res.redirect("/instructions");
  }
);
api.get("/logout", logout);
api.post("/questions", isLoggedIn, postQuestions);

export default api;
