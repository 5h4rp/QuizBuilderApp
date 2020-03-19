import { GET_SUCCESS, GET_FAIL, DELETE_QUES } from '../actions/types';

const initalState = {
  loading: true,
  questions: []
};

export default function(state = initalState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SUCCESS:
      return {
        ...state,
        loading: false,
        questions: payload
      };
    case GET_FAIL:
      return {
        ...state,
        loading: false,
        questions: payload
      };
    case DELETE_QUES:
      return {
        ...state,
        questions: state.questions.filter(q => q._id !== payload)
      };
    default:
      return state;
  }
}
