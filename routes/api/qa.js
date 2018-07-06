const express = require("express");
const router = express.Router();

const QA = require("../../models/QA");

const isEmpty = require("../../validation/is-empty");

const validateQAInput = require("../../validation/validateQAInput");

// @route  POST api/qa
// @desc   Adds a question
// @access Public
router.post("/", (req, res) => {
  const { errors, isValid } = validateQAInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newQA = {
    text: req.body.text,
    category: req.body.category
  };

  new QA(newQA).save().then(qa => res.json(qa));
});

// @route  GET api/qa/:id
// @desc   Get qa using id
// @access Public
router.get("/:id", (req, res) => {
  QA.findById(req.params.id)
    .then(qa => res.json(qa))
    .catch(err =>
      res.status(404).json({ noqafound: "There is no qa for this ID" })
    );
});

// @route  POST api/qa/answer/:id
// @desc   Answer a question using the question id
// @access Public
router.post("/answer/:id", (req, res) => {
  const { errors, isValid } = validateQAInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  QA.findById(req.params.id)
    .then(qa => {
      const newAnswer = {
        text: req.body.text
      };

      qa.answers.unshift(newAnswer);

      qa.save().then(qa => res.json(qa));
    })
    .catch(err =>
      res.status(404).json({ noqafound: "There is no qa for this ID" })
    );
});

// @route  GET api/qa
// @desc   Returns every Q/A's
// @access Public
router.get("/", (req, res) => {
  QA.find()
    .sort({ date: -1 })
    .then(qa => {
      if (isEmpty(qa)) {
        return res.status(404).json({ noqa: "There are no Q/A's found" });
      }
      res.json(qa);
    });
});

// @route  GET api/qa/category/:category
// @desc   Returns qa's by category
// @access Public
router.get("/category/:category", (req, res) => {
  QA.find({ category: req.params.category })
    .sort({ date: -1 })
    .then(qa => {
      if (isEmpty(qa)) {
        return res
          .status(404)
          .json({ noqa: "There are no Q/A's found in this category" });
      }
      res.json(qa);
    });
});

module.exports = router;
