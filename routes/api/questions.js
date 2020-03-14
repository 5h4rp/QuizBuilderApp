const express = require('express');
const router = express.Router();

const { check, validationResult } = require('express-validator');
const Question = require('../../models/Question');

// Get request to get all the questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Post request to create a new question
router.post(
  '/',
  [
    check('question', 'Question is required!')
      .not()
      .isEmpty(),
    check('answer', 'Answer is required!')
      .not()
      .isEmpty(),
    check('option1', 'Option1 is required!')
      .not()
      .isEmpty(),
    check('option2', 'Option2 is required!')
      .not()
      .isEmpty(),
    check('option3', 'Option3 is required!')
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    // console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { question, answer, option1, option2, option3 } = req.body;

    try {
      let newQuestion = await Question.findOne({ question });

      if (newQuestion) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Question already exists' }] });
      }

      newQuestion = new Question({
        question,
        answer,
        option1,
        option2,
        option3
      });

      await newQuestion.save();

      res.send('Question saved!');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// Delete request to delete a specific question
router.delete('/:id', async (req, res) => {
  try {
    const ques = await Question.findById(req.params.id);

    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !ques) {
      return res.status(404).json({ msg: 'Question not found' });
    }

    await ques.remove();

    res.json({ msg: 'Question removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
