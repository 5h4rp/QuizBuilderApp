import axios from 'axios';
import { GET_SUCCESS, GET_FAIL } from './types';

export const getAll = () => async dispatch => {
  try {
    const res = await axios.get('/questions');

    dispatch({
      type: GET_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: GET_FAIL,
      payload: []
    });
    console.log('Error while getting all the questions');
  }
};
