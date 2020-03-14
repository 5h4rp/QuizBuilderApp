const mongoose = require('mongoose');

const QuesSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  option1: {
    type: String,
    required: true
  },
  option2: {
    type: String,
    required: true
  },
  option3: {
    type: String,
    required: true
  }
});

module.exports = Question = mongoose.model('Question', QuesSchema);
