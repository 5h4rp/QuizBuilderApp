import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteQues } from '../actions/delete';

const QuesList = ({ deleteQues, ques }) => {
  // const onClick = e => {
  //   console.log(e.target.id);
  //   deleteQues(e.target.id);
  // };

  const quesList = ques.questions.map(q => (
    <li key={q._id}>
      {q.question} <button onClick={e => deleteQues(q._id)}>Delete</button>
    </li>
  ));

  return (
    <Fragment>
      {ques.questions.length > 0 ? (
        <ul>{quesList}</ul>
      ) : (
        <span>Load questions to access the full list.</span>
      )}
    </Fragment>
  );
};

QuesList.propTypes = {
  ques: PropTypes.object.isRequired,
  deleteQues: PropTypes.func.isRequired
};

const mapStateToProp = state => ({
  ques: state.get
});

export default connect(mapStateToProp, { deleteQues })(QuesList);
