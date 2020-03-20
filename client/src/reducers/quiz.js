import {
  ADD_RESPONSE,
  ADD_SCORE,
  RESET_QUIZ,
  SET_TOTAL,
  SET_QUIZ
} from '../actions/types';

const initialState = {
  score: 0,
  response: 0,
  total: 0,
  quiz: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TOTAL:
      return {
        ...state,
        total: payload
      };
    case ADD_RESPONSE:
      return {
        ...state,
        response: state.response + payload
      };
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + payload
      };
    case RESET_QUIZ:
      return {
        ...state,
        score: 0,
        response: 0,
        total: 0,
        quiz: []
      };
    case SET_QUIZ:
      return {
        ...state,
        quiz: [...state.quiz, ...payload]
      };
    default:
      return state;
  }
}
