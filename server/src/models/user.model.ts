import mongoose, { Document, Schema } from "mongoose";

export interface UserDoc extends Document {
  id: number;
  name: string;
  email: string;
  gender: string;
  birthday: Date;
  hometown: string;
  location: string;
  likes: [
    {
      id: number;
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
  id: Number,
  name: { type: String },
  email: { type: String },
  gender: { type: String },
  birthday: Date,
  hometown: { type: String },
  location: { type: String },
  likes: [
    {
      id: Number,
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
