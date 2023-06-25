const Post = require("../models/post");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//

//get all Post
const getPosts = async (req, res) => {
  try {
    const users = await Post.find({});
    res.status(200).json(users);
  } catch {
    (err) => res.status(404).json({ error: err.message });
  }
};

//Create a New Post

const createPost = async (req, res) => {
  const { postID, userID, title, content } = req.body;

  try {
    const user = await Child.create({
      postID,
      userID,
      title,
      content,
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
