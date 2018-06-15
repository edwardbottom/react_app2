//react libraries and imports
import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
//imports the screens for the routes from the files in the screens folder
import App from './App.js'

//todo: render this to dynamic json objects 
//renders the routes to transfer data between screens
ReactDOM.render(
  <App data="Somi is a ledgend"/>,
  document.getElementById('root')
);



