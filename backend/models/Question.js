const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionText: String,
  answerText: String,
  audioPath: String
});

module.exports = mongoose.model('Question', QuestionSchema);
