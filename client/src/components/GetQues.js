import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAll } from '../actions/get';

const GetQues = ({ getAll, getQues }) => {
  const onClick = e => {
    getAll();
  };

  const getMsg = <span>Click to load questions from database.</span>;
  const getSuccess = (
    <span>
      The total number of available questions is {getQues.questions.length}
    </span>
  );
  const getFail = <span>Could not fetch questions try again!</span>;

  return (
    <Fragment>
      <button onClick={e => onClick(e)}>Get Questions</button>
      {getQues.loading
        ? getMsg
        : !getQues.loading && getQues.questions.length !== 0
        ? getSuccess
        : getFail}
    </Fragment>
  );
};

GetQues.propTypes = {
  getQues: PropTypes.object.isRequired,
  getAll: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  getQues: state.get
});

export default connect(mapStateToProps, { getAll })(GetQues);
