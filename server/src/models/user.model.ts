import mongoose, { Document, Schema } from "mongoose";

export interface UserModel extends Document {
  fbid: string;
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
      id: number;
      value: number;
      answer: number;
    }
  ];
  likes: [
    {
      id: string;
      name: string;
      link: string;
      description: string;
    }
  ];
  posts: [
    {
      id: string;
      name: string;
      message: string;
      description: string;
      link: string;
      type: string;
      status_type: string;
    }
  ];
}

const UserSchema = new Schema({
  profile: {
    fbid: { type: String, unique: true },
    name: { type: String },
    email: { type: String, unique: true },
    gender: { type: String },
    birthday: { type: Date },
    hometown: { id: { type: String }, name: { type: String } },
    location: { id: { type: String }, name: { type: String } }
  },
  auth: {
    type: {
      access_token: { type: String, required: true },
      expires_on: { type: Date, required: true }
    },
    required: true
  },
  questions: [
    {
      id: { type: Number, min: 0, max: 21, unique: true },
      value: { type: Number, min: 0, max: 3 },
      answer: { type: Number, min: 0, max: 3 }
    }
  ],
  likes: [
    {
      id: { type: Number },
      name: { type: String },
      link: { type: String },
      description: { type: String, default: "" }
    }
  ],
  posts: [
    {
      id: { type: String },
      name: { type: String },
      message: { type: String, default: "" },
      description: { type: String, default: "" },
      link: { type: String },
      type: { type: String },
      status_type: { type: String }
    }
  ]
});

export default mongoose.model<UserModel>("User", UserSchema);
