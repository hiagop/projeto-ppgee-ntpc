import express from "express";
import passport from "passport";
import { fbStrategy } from "@configs/facebook";
import {
  login,
  fbLogin,
  fbLoginCallback,
  logout,
  postQuestions
} from "@controllers/user.controller";

const api = express.Router();

passport.use(fbStrategy);

api.get("/", (req, res) => {
  res.json({
    path: req.path,
    session_id: req.sessionID
  });
});

api.get("/login", login);
api.get("/login/facebook", passport.authenticate("facebook"), fbLogin);
api.get(
  "/login/facebook/callback",
  passport.authenticate("facebook"),
  fbLoginCallback
);
api.get("/logout", logout);
api.post("/questions", postQuestions);

export default api;
