import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        likes:{
            type:Number,
            default: 0
        },
        comments:{
            type:Number,
            default: 0
        },
        description:{
            type:string,
            default: ""
        },
        media:{
            type:string,
            default: ""
        },
        feeling:{
            type:string,
            default: ""
        }

    },
    {
        timestamps: true,
    }
)

export const post = mongoose.model("post", postSchema);