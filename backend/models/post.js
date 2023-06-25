const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    postID: {
      type: String,
      required: true,
      unique: true,
    },
    userID: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
