const express = require("express");
const router = express.Router();

const Post = require("../../models/Post");

const validatePostInput = require("../../validation/validatePostInput");

// @route  POST api/posts
// @desc   Adds a post
// @access Public
router.post("/", (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPost = {
    text: req.body.text,
    category: req.body.category
  };

  new Post(newPost).save().then(post => res.json(post));
});

// @route  GET api/posts/:id
// @desc   Get post using id
// @access Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ nopostfound: "There is no post for this ID" })
    );
});

// @route  Post api/posts/comment/:id
// @desc   Comment a post using the post id
// @access Public
router.post("/comment/:id", (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  Post.findById(req.params.id)
    .then(post => {
      const newComment = {
        text: req.body.text
      };

      post.comments.unshift(newComment);

      post.save().then(post => res.json(post));
    })
    .catch(err =>
      res.status(404).json({ nopostfound: "There is no post for this ID" })
    );
});

// @route  GET api/posts
// @desc   Returns every posts
// @access Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(post => {
      res.json(post);
    })
    .catch(err => res.status(404).json({ nopost: "There are no posts found" }));
});

// @route  GET api/posts/category/:category
// @desc   Returns posts by category
// @access Public
router.get("/category/:category", (req, res) => {
  Post.find({ category: req.params.category })
    .sort({ date: -1 })
    .then(post => {
      res.json(post);
    })
    .catch(err => res.status(404).json({ nopost: "There are no posts found" }));
});

module.exports = router;
