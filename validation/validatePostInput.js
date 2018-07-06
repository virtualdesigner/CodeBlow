const isEmpty = require("./is-empty");
const Validator = require("validator");

module.exports = validatePostInput = data => {
  const errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 4, max: 300 })) {
    errors.text = "Post must be between 4 - 300 characters long";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Post field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
