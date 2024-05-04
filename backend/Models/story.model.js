import mongoose, { Schema } from "mongoose";

const stortSchema = new Schema(
  {
    media: {
      type: String,
    },
    description: {
      type: String,
    },
    viewers: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const story = mongoose.Schema("story",stortSchema);