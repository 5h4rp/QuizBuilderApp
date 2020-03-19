import axios from 'axios';
import { DELETE_QUES } from './types';

export const deleteQues = id => async dispatch => {
  try {
    const res = await axios.delete(`/questions/${id}`);

    if (res.status === 200) {
      dispatch({
        type: DELETE_QUES,
        payload: id
      });
    }
  } catch (err) {
    console.log('Error while deleting the question.');
  }
};
