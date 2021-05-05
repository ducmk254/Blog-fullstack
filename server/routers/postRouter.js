import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
} from "../consollers/postController.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.post("/update", updatePost);
export default router;
