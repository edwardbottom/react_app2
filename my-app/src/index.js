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

//renders the routes to transfer data between screens
ReactDOM.render(
  <Router>
      <div>
        <Route exact path="/home" component={HomeScreen} />
        <Route path="/history" component={HistoryScreen} />
        <Route path="/accessrequest" component={AccessRequestScreen} />
        <Route path="/usertools" component={UserToolsScreen} />
        <Route path="/budgetrequests" component={BudgetRequestScreen} />
        <Route path="/contractormanagement" component={ContractorManagementScreen} />
        <Route path="/realestate" component={RealEstateScreen} />
        <Route path="/voiceanddataservices" component={VoiceAndDataServicesScreen} />
        <Route path="/dynamic" component={DynamicScreen} />
        <Route exact path="/" component={LoginScreen} />
      </div>
  </Router>,
  document.getElementById('root')
);



