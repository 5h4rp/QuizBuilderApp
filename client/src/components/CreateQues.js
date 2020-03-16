import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { createNew } from '../actions/create';

import PropTypes from 'prop-types';

//testing
// import test from '../Testing/test';

const CreateQues = ({ register }) => {
  const [formData, setFormData] = useState({
    question: '',
    answer: '',
    option1: '',
    option2: '',
    option3: ''
  });

  const { question, answer, option1, option2, option3 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    // test();
    createNew({ question, answer, option1, option2, option3 });
    console.log('Submitted!');
  };

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <label htmlFor='question'>Question:</label>
        <input
          type='text'
          name='question'
          id='question'
          value={question}
          onChange={e => onChange(e)}
          placeholder='Type your question here'
          required
        />
        <label htmlFor='answer'>Answer:</label>
        <input
          type='text'
          name='answer'
          id='answer'
          value={answer}
          onChange={e => onChange(e)}
          placeholder='Type the correct answer'
          required
        />
        <label htmlFor='option1'>Option1:</label>
        <input
          type='text'
          name='option1'
          id='option1'
          value={option1}
          onChange={e => onChange(e)}
          placeholder='Type first wrong option'
          required
        />
        <label htmlFor='option2'>Option2:</label>
        <input
          type='text'
          name='option2'
          id='option2'
          value={option2}
          onChange={e => onChange(e)}
          placeholder='Type second wrong option'
          required
        />
        <label htmlFor='option3'>Option3:</label>
        <input
          type='text'
          name='option3'
          id='option3'
          value={option3}
          onChange={e => onChange(e)}
          placeholder='Type third wrong option'
          required
        />
        <button type='submit'>Submit</button>
      </form>
    </Fragment>
  );
};

CreateQues.propTypes = {
  createNew: PropTypes.func.isRequired
};

export default connect(null, { createNew })(CreateQues);
