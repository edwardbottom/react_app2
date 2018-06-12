//react libraries and imports
import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//imports the screens for the routes from the files in the screens folder
import HomeScreen from './components/screens/MyTasks';
import HistoryScreen from './components/screens/History';
import AccessRequestScreen from './components/screens/AccessRequest';
import UserToolsScreen from './components/screens/UserTools';
import BudgetRequestScreen from './components/screens/BudgetRequest'
import ContractorManagementScreen from './components/screens/ContractorManagement'
import RealEstateScreen from './components/screens/RealEstate'
import VoiceAndDataServicesScreen from './components/screens/VoiceAndDataServices'
import DynamicScreen from './components/screens/Dynamic'
import LoginScreen from './components/screens/Login'
import SearchScreen from './components/screens/search'



//random data
let routes = new Object();
routes.list = [];

let routeObj1 = new Object();
routeObj1.path = "/home";
routeObj1.component = HomeScreen;

let routeObj2 = new Object();
routeObj2.path = "/history";
routeObj2.component = HistoryScreen;

let routeObj3 = new Object();
routeObj3.path = "/accessrequest";
routeObj3.component = AccessRequestScreen;

let routeObj4 = new Object();
routeObj4.path = "/usertools";
routeObj4.component = UserToolsScreen;

let routeObj5 = new Object();
routeObj5.path = "/budgetrequests";
routeObj5.component = BudgetRequestScreen;

let routeObj6 = new Object();
routeObj6.path = "/contractormanagement";
routeObj6.component = ContractorManagementScreen;

let routeObj7 = new Object();
routeObj7.path = "/voiceanddataservices";
routeObj7.component = VoiceAndDataServicesScreen;

let routeObj8 = new Object();
routeObj8.path = "/dynamic";
routeObj8.component = DynamicScreen;

let routeObj9 = new Object();
routeObj9.path = "/search";
routeObj9.component = SearchScreen;

let routeObj10 = new Object();
routeObj10.path = "/login";
routeObj10.component = LoginScreen;


let routeObj11 = new Object();
routeObj11.path = "/realestate";
routeObj11.component = RealEstateScreen;


let routeObj0 = new Object();
routeObj0.path = "/";
routeObj0.component = LoginScreen;


routes.list.push(routeObj1);
routes.list.push(routeObj2);
routes.list.push(routeObj3);
routes.list.push(routeObj4);
routes.list.push(routeObj5);
routes.list.push(routeObj6);
routes.list.push(routeObj7);
routes.list.push(routeObj8);
routes.list.push(routeObj9);
routes.list.push(routeObj10);
routes.list.push(routeObj11);
routes.list.push(routeObj0);

//creates one route from a route object with a path and component
function route(props){
  return(
    <Route exact path={props.path} component={props.component}/>
    );
}

//creates routes from an objects with a list of route objects
function createRoutes(props){
  return(
    <div>
        {props.list.map((routeObj, index) =>
          route(routeObj)
        )}
    </div>
    ) 
}

//todo: render this to dynamic json objects 
//renders the routes to transfer data between screens
ReactDOM.render(
  <Router>
    {createRoutes(routes)}
  </Router>,
  document.getElementById('root')
);



