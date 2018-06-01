//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, linksPanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';

let one = new Object();
one.route = "link";
one.header = "Change User Password";
one.body = "Can change a user's password when clicked. ";
let two= new Object();
two.route = "link";
two.header = "Vehicle Change/Transfer Request";
two.body = "Used to transfer a vehicle to a new driver and company or department";
let three= new Object();
three.route = "link";
three.header = "Vehicle Change/Transfer Request";
three.body = "Used to transfer a vehicle to a new driver and company or department";
let four= new Object();
four.route = "link";
four.header = "Vehicle Change/Transfer Request";
four.body = "Used to transfer a vehicle to a new driver and company or department";
let five= new Object();
five.route = "link";
five.header = "Vehicle Change/Transfer Request";
five.body = "Used to transfer a vehicle to a new driver and company or department";
let six= new Object();
six.route = "link";
six.header = "Vehicle Change/Transfer Request";
six.body = "Used to transfer a vehicle to a new driver and company or department";

let list = [];
list.push(one);
list.push(two);
list.push(three);
list.push(four);
list.push(five);
list.push(six);

let textObj = new Object();
textObj.header = "Budget Requests";
textObj.description = "This will contain the Budget Requests";

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

let center = new Object();
center.route = "link"
center.body = "Support work space assignment and updates with optional changes to existing services including: Telephone service, Hardware reallocation, and mover requirements. In addition, the requisition and management of furniture to work locations.";
center.header = "Real Estate"

let headerObj = new Object();
headerObj.header = "Important Links";

navBarObj.searchbar = searchBar;

let linksObj = new Object();
linksObj.route = "link";
linksObj.header = "Important Links";

let link = new Object();
link.url = "link";
link.text = "This is a link";

linksObj.linkList = [];
linksObj.linkList.push(link);
linksObj.linkList.push(link);
linksObj.linkList.push(link);
linksObj.linkList.push(link);

let workFlowObj = new Object();
workFlowObj.header = "Work Flow";

export default class DynamicBody extends React.Component {
  render() {
    return (
      <div>
          {createNavBar(navBarObj)}
          <div className="container">
            {centerPanel(center)}
            {header(headerObj)}
            {linksPanel(linksObj)}
            {(header(workFlowObj))}
            {createPanels(list)}
          </div>
      </div>
    );
  }
}


