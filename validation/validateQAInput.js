const isEmpty = require("./is-empty");
const Validator = require("validator");

module.exports = validateQAInput = data => {
  const errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "This must be between 10 - 300 characters long";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "This field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
