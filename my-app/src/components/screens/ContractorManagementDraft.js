//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, linksPanel, createCenterPanels} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';

let one = new Object();
one.route = "link";
one.header = "Find Contractors";
one.body = "Changes a Users Password When Clicked";
let two= new Object();
two.route = "link";
two.header = "Provision Contractors"
two.body = "Request UNIX Access. If you need help requestion access, please, click here"
let three= new Object();
three.route = "link";
three.header = "Manage Contractors";
three.body = "Request user password reset for organizations with extended user count";


let list = [];
list.push(one);
list.push(two);
list.push(three);



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

let workFlowHeader = new Object();
workFlowHeader.header = "Work Flow";

let headerAndDisc = new Object();
headerAndDisc.header = "User Tools";
headerAndDisc.description = "null"; 

navBarObj.searchbar = searchBar;

let centerObj = new Object();
centerObj.header = "Voice and Data Services";
centerObj.route = "route";
centerObj.body = "Tools to manage and provision phone, network and other voices services.";

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

let importantLinksHeader = new Object();
importantLinksHeader.header = "Important Links";

export default class DynamicBodyScreen extends React.Component {
  render() {
    return (
      <div>
          {createNavBar(navBarObj)}
          <div className="container">
            {header(importantLinksHeader)}
            {linksPanel(linkObj)}
            {header(workFlowHeader)}
            {createCenterPanels(list)}
          </div>
      </div>
    );
  }
}


