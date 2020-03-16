import axios from 'axios';
import { CREATE_SUCCESS, CREATE_FAIL } from './types';

//create new question
export const createNew = ({
  question,
  answer,
  option1,
  option2,
  option3
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    question,
    answer,
    option1,
    option2,
    option3
  });

  try {
    const res = await axios.post('/questions/', body, config);

    dispatch({
      type: CREATE_SUCCESS
    });
    console.log(res.data);
  } catch (err) {
    dispatch({
      type: CREATE_FAIL
    });
    console.log('error while creating question!');
  }
};
