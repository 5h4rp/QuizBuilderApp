import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from './QuizLayout/Question';
import { reset, setTotal, setQuiz } from '../actions/quiz';

const TakeQuiz = ({ totalQues, QuizState, reset, setTotal, setQuiz }) => {
  const [state, setState] = useState({
    number: 0,
    response: -1
  });

  const checker = (arr, n) => {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len)
      throw new RangeError('getRandom: more elements taken than available');
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len;
    }
    return result;
  };

  const onChange = e => {
    setState({ ...state, number: parseInt(e.target.value) });
  };

  const onSubmit = e => {
    e.preventDefault();

    // console.log(totalQues.questions);
    setState({ ...state, number: parseInt(e.target.value) });
    const RandomQues = checker(totalQues.questions, state.number);

    console.log(RandomQues);

    reset();
    setQuiz(RandomQues);

    console.log(`generating ${state.number} questions quiz`);

    setState({ ...state, response: 0 });
  };

  const useDebugValue = () => (state.number == 0 ? true : false);

  const shuffledOpt = q => {
    const opt = [q.answer, q.option1, q.option2, q.option3];
    const ShufOpt = checker(opt, 4);
    console.log(ShufOpt);
    return ShufOpt;
  };

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <label htmlFor='quesNum'>
          Select the number of questions for the quiz
        </label>
        <input
          type='number'
          id='quesNum'
          name='quesNum'
          min='1'
          max={totalQues.questions.length}
          //   onChange={e => onChange(e)}
        />
        <input type='submit' value='Generate' />
      </form>
      {QuizState.quiz.map(q => (
        <Question
          key={q._id}
          question={q.question}
          answer={q.answer}
          options={shuffledOpt(q)}
        />
      ))}
    </Fragment>
  );
};

TakeQuiz.propTypes = {
  totalQues: PropTypes.object.isRequired
};

const mapStateToProp = state => ({
  totalQues: state.get,
  QuizState: state.quiz
});

export default connect(mapStateToProp, { reset, setTotal, setQuiz })(TakeQuiz);
