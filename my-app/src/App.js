//external react libraries
import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import './App.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//external react classes 
import Navigation from './components/screens/Navigation';
import MyTasks from './components/screens/MyTasks';
import History from './components/screens/History';
import AccessRequest from './components/screens/AccessRequest';
import UserTools from './components/screens/UserTools'


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <MyTasks />
      </div>
    );
  }
}

//class for the my tasks/home screen
class HomeScreen extends Component {
  render(){
    return(
      <div>
        <Navigation />
        <MyTasks />
      </div>
    );
  }
}

//screen to view previous requests
class HistoryScreen extends Component {
  render(){
    return(
      <div>
        <Navigation/>
        <History />
      </div>
    );
  }
}

//class for the access request screen
class AccessRequestScreen extends Component {
  render(){
    return(
      <div>
        <Navigation/>
        <AccessRequest />
      </div>
    );
  }
}

//class for the user tools screen 
class UserToolsScreen extends Component {
  render(){
    return(
      <div>
        <Navigation/>
        <UserTools/>
      </div>
    );
  }
}


export default UserToolsScreen;
