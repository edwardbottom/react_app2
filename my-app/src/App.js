//react libraries and imports
import React from 'react';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
import axios from 'axios';

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
import WorkAreaScreen from './components/screens/WorkArea'
import ChangePasswordScreen from './components/screens/ChangePassword'
import ComplexScreen from './components/screens/ComplexScreen'


//random data
// var navBarObj = new Object();
// navBarObj.titlePath = "/home";
// let navItems = [];
// let navone = new Object();
// navone.id = "my_tasks_listener"
// navone.path= "/home"
// navone.action= "loadMyTasks();"
// navone.description= "My Tasks";

// let navtwo = new Object();
// navtwo.id = "access_request_listener";
// navtwo.path= "/accessrequest";
// navtwo.description="Access Request";

// let navthree = new Object();
// navthree.id = "budget_request_listener";
// navthree.path= "/budgetrequests";
// navthree.description="Budget Request";

// let navfour = new Object();
// navfour.id = "contractor_management_listener";
// navfour.path= "/contractormanagement";
// navfour.description="Contractor Management";

// let navfive = new Object();
// navfive.id = "real_estate_listener";
// navfive.path= "/realestate";
// navfive.description="Real Estate"

// let navseven = new Object();
// navseven.id = "user_tools_listener";
// navseven.path= "/usertools";
// navseven.description="User Tools"

// let naveight = new Object();
// naveight.id = "voice_and_data_services_listener"
// naveight.path= "/voiceanddataservices"
// naveight.description="Voice and Data Services"

// let navnine = new Object();
// navnine.id= "logout"
// navnine.path= "/"
// navnine.description="Logout"

// navItems.push(navone);
// navItems.push(navtwo);
// navItems.push(navthree);
// navItems.push(navfour);
// navItems.push(navfive);
// navItems.push(navseven);
// navItems.push(naveight);
// navItems.push(navnine);

// navBarObj.list = navItems;

// let searchBar = new Object();
// searchBar.router = "phpIsTheWorst";
// searchBar.placeholder = "Search WSS System";


// navBarObj.searchbar = searchBar;

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
routeObj8.data = "Somi is a ledgend";

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

let routeObj12 = new Object();
routeObj12.path = "/WorkFlow";
routeObj12.component = WorkAreaScreen;

let routeObj13 = new Object();
routeObj13.path = "/ChangePassword";
routeObj13.component = ChangePasswordScreen;

let routeObj14 = new Object();
routeObj14.path = "/complexscreen";
routeObj14.component = ComplexScreen;

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
routes.list.push(routeObj12);
routes.list.push(routeObj13);
routes.list.push(routeObj14);


export default class App extends React.Component {
  //sets the state of the class
  constructor(props) {
    super(props);
    this.state = {navObj: null};
  }

  //state life cycle
  componentDidMount() {
      axios.get("http://localhost:3004/navBarObj")
      .then(res => {
        const navBarObj = res.data;
        this.setState({ navBarObj });
        //alert(this.state.navBarObj);
      })
  }

  //creates one route from a route object with a path and component
  route(props){
    return(
      <PropsRoute exact path={props.path} component={props.component} navData={this.state.navBarObj}/>
    );
  }

  //creates routes from an object with a list of route objects
  createRoutes(props){
    if(this.state.navBarObj != undefined){
      return(
        <div>
          {props.list.map((routeObj, index) =>
            this.route(routeObj, this)
          )}
        </div>
        ) 
      }
    }

  //renders the template for the class
  render() {
    return (
      <div>
        <Router>
          {this.createRoutes(routes)}
        </Router>
      </div>
    );
  }
}

