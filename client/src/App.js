import React, { Fragment } from 'react';
import './App.css';

import CreateQues from './components/CreateQues';
import GetQues from './components/GetQues';
import QuesList from './components/QuesList';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <h1>Quiz Builder</h1>
        <CreateQues />
        <hr />
        <GetQues />
        <hr />
        <QuesList />
      </Fragment>
    </Provider>
  );
}

export default App;
