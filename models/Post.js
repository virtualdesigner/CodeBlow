const mongoose = require("mongoose");

const PostSchema = {
  text: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  comments: [
    {
      text: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
};

module.exports = Post = mongoose.model("post", PostSchema);
