import React from 'react';
import './App.css';
import { Provider } from 'react-redux'

import Container from './components/Container'

import store from './constants/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Container />
      </Provider>
    </div>
  );
}

export default App;
