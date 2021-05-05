import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: "Anonymous",
    },
    attachment: {
      type: String,
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    // createdAt, updateAt
  },
  { timestamps: true }
);

const ModelPost = mongoose.model("Post", postSchema);
export default ModelPost;
