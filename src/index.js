import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './GlobalStyles';
import firebase from './lib/firebase.prod';
import { FirebaseContext } from './context/FirebaseContext';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase }}>
    <React.StrictMode>
      <GlobalStyles />
      <App />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

