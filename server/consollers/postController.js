import PostModel from "../models/PostModel.js";
export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    // console.log("posts: ", posts);
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json("error get post list: " + error);
  }
};
export const createPost = async (req, res) => {
  try {
    const newPost = res.body;

    const post = await new PostModel(newPost);
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json("error create new post : " + error);
  }
};
export const updatePost = async (req, res) => {
  try {
    const data = req.body;
    const post = await PostModel.findByIdAndUpdate({ _id: data._id }, post, {
      new: true,
    });
    res.status(200).json();
  } catch (error) {
    res.status(500).json("error update post: " + error);
  }
};
