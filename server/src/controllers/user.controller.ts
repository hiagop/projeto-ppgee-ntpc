import { Request, Response, NextFunction } from "express";
import User, { Question } from "@models/user.model";

export function logout(req: Request, res: Response): void {
  if (!req.user) {
    res.redirect("/");
  } else {
    req.logout();
    res.redirect("/");
  }
}

export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
  if (req.session!.user) {
    next();
  } else {
    res.redirect("/login");
  }
}

export async function postQuestions(req: Request, res: Response) {
  const { questions } = req.body;

  let user = await User.findOne({ fbid: req.user.id });

  if (user) {
    questions.forEach((question: Question) => {
      user!.questions.push({
        id: question.id,
        value: question.value,
        answer: question.answer
      });
    });

    try {
      user = await user.save();

      if (user) {
        return res.json({ success: true });
      }
    } catch (error) {
      return res.json({
        success: false,
        msg: "could not save the questions to the database",
        err: error
      });
    }
  } else {
    res.status(404).json({
      success: false,
      msg: "user not found"
    });
  }
}
