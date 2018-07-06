const mongoose = require("mongoose");

const QASchema = {
  text: {
    type: String,
    required: true
  },
  category: {
    type: String
  },
  answers: [
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

module.exports = QA = mongoose.model("qa", QASchema);
