//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';

//random data
let one = new Object();
one.route = "link1";
one.header = "Cloud SUDO Access";
//one.body = "Request Cloud SUDO Access";
let two= new Object();
two.route = "link2";
two.header = "Unix Access"
//two.body = "Request UNIX Access. If you need help requestion access, please, click here"
let three= new Object();
three.route = "link3";
three.header = "Bulk Password Reset Request";
//three.body = "Request user password reset for organizations with extended user count";
let four= new Object();
four.route = "link4";
four.header = "AAUR (Access Another User(s) Resources";
four.body = "For Business Continuity. To gain access to Email, information on hard drive, or share folders/home drives of Terminated or Users on Disability. If you need help requesting access, please click here. For obtaining information on Active employees please consult with your HR Business Partner (HRBP)";
let five= new Object();
five.route = "link5";
five.header = "Application Access V2";
five.body = "Request access to Applications within the following environments: Regular, Intelligent Desktop (ID) and CTLAccess SSO. If you need help requesting access, please click here";
let six= new Object();
six.route = "link6";
six.header = "Application Global Group(s) & CITRIX ICON";
six.body = "Request access to CITRIX ICON and Application Global Group(s). CITRIX access publishes the CITRIX ICON that is used in CTL CITRIX for user(s). Application Global Group(s) access provides rights and permissions to a group of user(s) needing access to a specific Application(s). If you need help requesting access, please click here";


let list = [];
list.push(one);
list.push(two);
list.push(three);
list.push(four);
list.push(five);
list.push(six);


let textObj = new Object();
textObj.header = "Access Request";
textObj.description = "Tools to manage system and application access.";

let headerObj = new Object();
headerObj.header = "Work Flows";

let navBarObj = new Object();
navBarObj.titlePath = "/home";
let navItems = [];
let navone = new Object();
navone.id = "my_tasks_listener"
navone.path= "/home"
navone.action= "loadMyTasks();"
navone.description= "My Tasks";

let navtwo = new Object();
navtwo.id = "access_request_listener";
navtwo.path= "/accessrequest";
navtwo.description="Access Request";

let navthree = new Object();
navthree.id = "budget_request_listener";
navthree.path= "/budgetrequests";
navthree.description="Budget Request";

let navfour = new Object();
navfour.id = "contractor_management_listener";
navfour.path= "/contractormanagement";
navfour.description="Contractor Management";

let navfive = new Object();
navfive.id = "real_estate_listener";
navfive.path= "/realestate";
navfive.description="Real Estate"

let navseven = new Object();
navseven.id = "user_tools_listener";
navseven.path= "/usertools";
navseven.description="User Tools"

let naveight = new Object();
naveight.id = "voice_and_data_services_listener"
naveight.path= "/voiceanddataservices"
naveight.description="Voice and Data Services"

let navnine = new Object();
navnine.id= "logout"
navnine.path= "/"
navnine.description="Logout"

navItems.push(navone);
navItems.push(navtwo);
navItems.push(navthree);
navItems.push(navfour);
navItems.push(navfive);
navItems.push(navseven);
navItems.push(naveight);
navItems.push(navnine);

navBarObj.list = navItems;

let searchBar = new Object();
searchBar.router = "phpIsTheWorst";
searchBar.placeholder = "Search WSS System";

navBarObj.searchbar = searchBar;

let largeModalPanel = new Object();
largeModalPanel.route ="#";
largeModalPanel.target="#application-access-v2-modal";
largeModalPanel.header = "Application Access V2 (Large Modal)";
largeModalPanel.body = "Request access to Applications within the following environments: Regular, Intelligent Desktop (ID) and CTLAccess SSO. If you need help requesting access, please click here";

//renders the access request screen
export default class AccessRequestScreen extends React.Component {
  //constructor and state intialization
  constructor(props) {
    super(props);
    this.state = {navData:this.props.navData,
      content:null,
      //url:this.props.url
      //url:"http://localhost:3004/content"
    };
  };

  //state life cycle
  componentDidMount() {
      //axios.get(this.state.url)
      //.then(res => {
        //const content = res.data;
        //this.setState({ content });
      //})
  }

  render() {
    return (
      <div>
          {createNavBar(this.state.navData)}
          <div className="container">
            {headerAndDescription(textObj)}
            {header(headerObj)}
          {/*hard code*/}
            <div className="panel panel-success">
              {/*modal panel*/}
              <div className="panel-heading">
                <a href='/workflow' data-toggle="modal" >
                  <strong>Application Access V2 (Work Flow Page)</strong>
                </a>
                <a href="#myModal" data-toggle="modal" data-target="#myModal">
                  <span class="glyphicon glyphicon-question-sign"></span>
                </a>
              </div>
                <div id="myModal" class="modal fade" role="dialog">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-body">
                        <p>"Request access to Applications within the following environments: Regular, 
                        Intelligent Desktop (ID) and CTLAccess SSO. If you need help requesting access,
                         please click here";</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-success">
                <div className="panel-heading">
                  <a href='/complexscreen'>
                    <strong>Application Access V2 (dynamic Page)</strong>
                  </a>
                </div>
              </div>
              {panel(largeModalPanel)}
              {createPanels(list)}
            </div> 
          </div>
    );
  }
}


