import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Register from './register';

import 'bootstrap/dist/css/bootstrap.min.css';


import firebaseConfig from './utils/firebaseConfig';
import { FirebaseAppProvider } from 'reactfire';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>

    <Register />
    
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();