import { CREATE_SUCCESS, CREATE_FAIL } from '../actions/types';

const initalState = {
  saved: null,
  loading: true
};

export default function(state = initalState, action) {
  const { type } = action;

  switch (type) {
    case CREATE_SUCCESS:
      return {
        ...state,
        saved: true,
        loading: false
      };
    case CREATE_FAIL:
      return {
        ...state,
        saved: false,
        loading: false
      };
    default:
      return state;
  }
}
