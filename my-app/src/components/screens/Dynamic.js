//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';

let one = new Object();
one.route = "link";
one.header = "Cloud SUDO Access";
one.body = "Request Cloud SUDO Access";
let two= new Object();
two.route = "link";
two.header = "Unix Access"
two.body = "Request UNIX Access. If you need help requestion access, please, click here"
let three= new Object();
three.route = "link";
three.header = "Bulk Password Reset Request";
three.body = "Request user password reset for organizations with extended user count";
let four= new Object();
four.route = "link";
four.header = "AAUR (Access Another User(s) Resources";
four.body = "For Business Continuity. To gain access to Email, information on hard drive, or share folders/home drives of Terminated or Users on Disability. If you need help requesting access, please click here. For obtaining information on Active employees please consult with your HR Business Partner (HRBP)";
let five= new Object();
five.route = "link";
five.header = "Application Access V2";
five.body = "Request access to Applications within the following environments: Regular, Intelligent Desktop (ID) and CTLAccess SSO. If you need help requesting access, please click here";
let six= new Object();
six.route = "link";
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

/*
  <li><a id="my_tasks_listener" href="/home" onClick="loadMyTasks();">My Tasks</a></li>
  <li><a id="access_request_listener" href="/accessrequest" onClick="loadAccessRequest();">Access Request</a></li>
  <li><a id="budget_request_listener" href="/budgetrequests" onClick="loadBudgetRequest();">Budget Request</a></li>
  <li><a id="contractor_management_listener" href="/contractormanagement" onClick="loadContractorManagement();">Contractor Management</a></li>
  <li><a id="real_estate_listener" href="/realestate" onClick="loadRealEstate();">Real Estate</a></li>
  <li><a id="user_tools_listener" href="/usertools" onClick="loadUserTools();">User Tools</a></li>
  <li><a id="voice_and_data_services_listener" href="/voiceanddataservices" onClick="loadVoiceAndDataServices();">Voice and Data Services</a></li>
  <li><a id="dynamic_screen" href="/dynamic"> Dynamic </a> </li>
*/
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
navnine.id= "dynamic_screen"
navnine.path= "/dynamic"
navnine.description="Dynamic"

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
class DynamicBody extends React.Component {
  render() {
    return (
      <div>
          {createNavBar(navBarObj)}
          <div className="container">
            {headerAndDescription(textObj)}
            {header(headerObj)}
            {createPanels(list)}
          </div>
      </div>
    );
  }
}

export default class DynamicScreen extends Component {
  render(){
    return(
      <div>
        {/*<Navigation/>*/}
        <DynamicBody/>
      </div>
    );
  }
}

