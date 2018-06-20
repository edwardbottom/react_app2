//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, linksPanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';

//random data
let one = new Object();
one.route = "link11";
one.header = "Change User Password";
//one.body = "Changes a Users Password When Clicked";
let two= new Object();
two.route = "link12";
two.header = "Unix Access"
//two.body = "Request UNIX Access. If you need help requestion access, please, click here"
let three= new Object();
three.route = "link13";
three.header = "Bulk Password Reset Request";
//three.body = "Request user password reset for organizations with extended user count";
let four= new Object();
four.route = "link14";
four.header = "AAUR (Access Another User(s) Resources";
//four.body = "For Business Continuity. To gain access to Email, information on hard drive, or share folders/home drives of Terminated or Users on Disability. If you need help requesting access, please click here. For obtaining information on Active employees please consult with your HR Business Partner (HRBP)";
let five= new Object();
five.route = "link15";
five.header = "Application Access V2";
//five.body = "Request access to Applications within the following environments: Regular, Intelligent Desktop (ID) and CTLAccess SSO. If you need help requesting access, please click here";
let six= new Object();
six.route = "link16";
six.header = "Application Global Group(s) & CITRIX ICON";
//six.body = "Request access to CITRIX ICON and Application Global Group(s). CITRIX access publishes the CITRIX ICON that is used in CTL CITRIX for user(s). Application Global Group(s) access provides rights and permissions to a group of user(s) needing access to a specific Application(s). If you need help requesting access, please click here";


let list = [];
list.push(one);
list.push(two);
list.push(three);
list.push(four);
list.push(five);
list.push(six);


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

let workFlowHeader = new Object();
workFlowHeader.header = "Work Flow";

let headerAndDisc = new Object();
headerAndDisc.header = "User Tools";
headerAndDisc.description = "null"; 

navBarObj.searchbar = searchBar;

let centerObj = new Object();
centerObj.header = "Voice and Data Services";
centerObj.description = "Tools to manage and provision phone, network and other voices services.";

let linkObj = new Object();
linkObj.route = "route";
linkObj.header = "Important Links";
linkObj.linkList = [];
let lObj = new Object();
lObj.url = "link";
lObj.text = "This will be a link";
linkObj.linkList.push(lObj);
linkObj.linkList.push(lObj);
linkObj.linkList.push(lObj);

//renders a class for the voice and data services screen
export default class VoiceAndDataServicesScreen extends React.Component {
  //constructor and state intialization
  constructor(props) {
    super(props);
    this.state = {navData:this.props.navData,
      content:null,
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
            {headerAndDescription(centerObj)}
            {linksPanel(linkObj)}
            {headerAndDescription(headerAndDisc)}
            {header(workFlowHeader)}
            {createPanels(list)}
          </div>
      </div>
    );
  }
}


