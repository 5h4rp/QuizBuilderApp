import {
  ADD_RESPONSE,
  ADD_SCORE,
  RESET_QUIZ,
  SET_TOTAL,
  SET_QUIZ
} from '../actions/types';

export const response = () => dispatch => {
  dispatch({
    type: ADD_RESPONSE,
    payload: 1
  });
};

export const correct = () => dispatch => {
  dispatch({
    type: ADD_SCORE,
    payload: 1
  });
};

export const setTotal = total => dispatch => {
  dispatch({
    type: SET_TOTAL,
    payload: total
  });
};

export const reset = () => dispatch => {
  dispatch({
    type: RESET_QUIZ,
    payload: 0
  });
};

export const setQuiz = arr => dispatch => {
  dispatch({
    type: SET_QUIZ,
    payload: arr
  });
};
