import axios from 'axios';

const test = async () => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const body = JSON.stringify({
      question: 'a',
      answer: 'b',
      option1: 'c',
      option2: 'd',
      option3: 'e'
    });

    const get = await axios.post('/questions', body, config);
    console.log(get.data);
  } catch (err) {
    console.log('error');
  }
};

export default test;
