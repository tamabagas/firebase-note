import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/pages/App';
import * as serviceWorker from './serviceWorker';
import firebase from './config/firebase';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from './containers/pages/Dashboard';
import Login from './containers/pages/Login';
import Register from './containers/pages/Register';

// console.log('Config Foirebase ==> ',firebase); 



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();