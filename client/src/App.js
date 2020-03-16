import React, { Fragment } from 'react';
import './App.css';

import CreateQues from './components/CreateQues';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <h1>WTF</h1>
        <CreateQues />
      </Fragment>
    </Provider>
  );
}

export default App;
