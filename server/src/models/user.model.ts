import mongoose, { Document, Schema } from "mongoose";

export interface UserModel extends Document {
  fbid: number;
  name: string;
  email: string;
  gender: string;
  birthday: Date;
  hometown: string;
  location: string;
  auth: {
    access_token: string;
    expires_on: Date;
  };
  questions: [
    {
      question_id: number;
      answer: number;
    }
  ];
  likes: [
    {
      id: number;
      name: string;
      link: string;
      description?: string;
    }
  ];
  posts: [
    {
      id: string;
      name: string;
      message?: string;
      description: string;
      link: string;
      type: string;
      status_type: string;
    }
  ];
}

const UserSchema = new Schema({
  profile: {
    fbid: { type: Number },
    name: { type: String },
    email: { type: String },
    gender: { type: String },
    birthday: { type: Date },
    hometown: { type: String },
    location: { type: String }
  },
  auth: {
    access_token: { type: String },
    expires_on: { type: Date }
  },
  questions: [
    {
      question_id: { type: Number },
      answer: { type: Number }
    }
  ],
  likes: [
    {
      id: { type: Number },
      name: { type: String },
      link: { type: String },
      description: { type: String }
    }
  ],
  posts: [
    {
      id: { type: String },
      name: { type: String },
      message: { type: String },
      description: { type: String },
      link: { type: String },
      type: { type: String },
      status_type: { type: String }
    }
  ]
});

export default mongoose.model<UserModel>("User", UserSchema);
