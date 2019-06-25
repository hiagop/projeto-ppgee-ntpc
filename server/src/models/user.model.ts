import mongoose, { Document, Schema } from "mongoose";

export interface UserModel extends Document {
  fbid: number;
  name: string;
  email: string;
  gender: string;
  birthday: Date;
  hometown: {
    id: string;
    name: string;
  };
  location: {
    id: string;
    name: string;
  };
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
      description?: string;
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
    hometown: { id: { type: String }, name: { type: String } },
    location: { id: { type: String }, name: { type: String } }
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
      description: { type: String, required: false }
    }
  ],
  posts: [
    {
      id: { type: String },
      name: { type: String },
      message: { type: String, required: false },
      description: { type: String, required: false },
      link: { type: String },
      type: { type: String },
      status_type: { type: String }
    }
  ]
});

export default mongoose.model<UserModel>("User", UserSchema);
