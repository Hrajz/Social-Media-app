import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      // unique: true,
      // lowercase: true,
      // trim: true,
      // index: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    dp: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    homeTown: {
      type: String,
    },
    about: {
      type: String,
    },
    work: {
      type: String,
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    friendRequest: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    story: [
      {
        type: Schema.Types.ObjectId,
        ref: "story",
      },
    ],
    notification: [
      {
        type: Schema.Types.ObjectId,
        ref: "notification",
      },
    ],
    acrivity: [
      {
        type: String,
      },
    ],
    profilePictures: [
      {
        type: String,
      },
    ],
    coverImages: [
      {
        type: String,
      },
    ],
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "post",
      },
    ],
    messages: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "user",
        },
        message: [
          {
            type: String,
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);


export const User = mongoose.model("User", userSchema);
