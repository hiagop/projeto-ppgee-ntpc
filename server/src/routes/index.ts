import express from "express";
import {
  login,
  fbLogin,
  fbLoginCallback,
  logout,
  postQuestions
} from "@controllers/user.controller";

const api = express();

api.get("/", (req, res) => {
  res.json({
    path: req.path,
    session_id: req.sessionID
  });
});

api.get("/login", login);
api.get("/login/facebook", fbLogin);
api.get("/login/facebook/callback", fbLoginCallback);
api.get("/logout", logout);
api.post("/questions", postQuestions);

export default api;
