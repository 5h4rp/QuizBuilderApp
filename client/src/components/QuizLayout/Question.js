import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { response, correct } from '../../actions/quiz';

const Question = ({ question, options, answer, response, correct }) => {
  const [choice, setChoice] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    setChoice(e.target.value);
    if (choice === answer) {
      correct();
      response();
    }

    // move to next question
  };

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <h2>{question}</h2>
        {options.map(opt => (
          <div key={opt}>
            <input type='radio' name={question} id={opt} value={opt} />{' '}
            <label>{opt}</label>
          </div>
        ))}
        <input type='submit' value='Submit' />
      </form>
    </Fragment>
  );
};

Question.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  answer: PropTypes.string.isRequired,
  response: PropTypes.func.isRequired,
  correct: PropTypes.func.isRequired
};

// const mapStateToProp = state => ({

// })

export default connect(null, { correct, response })(Question);
