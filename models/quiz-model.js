const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  question: {},
  choices: {},
  answer: {}
});

module.exports = mongoose.model("Quiz", quizSchema);
