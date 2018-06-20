//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, linksPanel, createCenterPanels} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton, buttonWithLink} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';

//random data
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

let otherSearchBar = new Object();
otherSearchBar.router = "phpIsTheWorst";
otherSearchBar.placeholder = "Search Corperate Directory";

navBarObj.searchbar = searchBar;

let myTasksButton = new Object();
myTasksButton.id -= "myTasksButton";
myTasksButton.description = "My Tasks";
myTasksButton.list = [];
let obj11 = new Object();
obj11.description = "Sort Ascending";
obj11.path = "/path";
myTasksButton.list.push(obj11);
let obj22 = new Object();
obj22.description = "Sort Descending";
obj22.path = "/path";
myTasksButton.list.push(obj22);
let obj33 = new Object();
obj33.description = "Configure Sort";
obj33.path = "/path";
myTasksButton.list.push(obj33);
let obj44 = new Object();
obj44.description = "Auto Fit";
obj44.path = "/path";
myTasksButton.list.push(obj44);

let myRequestsButton = new Object();
myRequestsButton.id = "myRequestsButton";
myRequestsButton.description = "My Requests";
myRequestsButton.list = [];
myRequestsButton.list.push(obj11);
myRequestsButton.list.push(obj22);
myRequestsButton.list.push(obj33);
myRequestsButton.list.push(obj44);

let tableObj = new Object();
tableObj.headerObj = new Object();
let headerObj1 = new Object();
headerObj1.text = "Description";
let headerObj2 = new Object();
headerObj2.text = "Requested";
tableObj.header = [];
tableObj.header.push(headerObj1);
tableObj.header.push(headerObj2);

tableObj.body = [];
let rowObj = new Object();
rowObj.task = "A Task";
rowObj.description = "from the database";
rowObj.modalLink = "#modalLink";
rowObj.modal = new Object();
rowObj.modal.id = "modalLink"
rowObj.modal.description = "Do you want to approve or reject A Task?";

tableObj.body.push(rowObj);
tableObj.body.push(rowObj);
tableObj.body.push(rowObj);




let historyButton = new Object();
historyButton.target = "/history";
historyButton.text = "History";

//renders the screen for my tasks
export default class MyTasksScreen extends React.Component {
  render() {
    return (
      <div>
          {createNavBar(navBarObj)}
          <div className="container">
            <div id="My_Tasks_Screen">
              <div className="container">
              <div className="row">
                  <div className="d-inline">
                    <div>{rightSearchBar(otherSearchBar)}</div>
                    <div className="pull-right">{buttonWithLink(historyButton)}</div>
                  </div>
                  <div className="col-md-4"> 
                    {dropDownButton(myTasksButton)}
                    {table(tableObj)}
                  </div>
                  <div className="col-md-4"> 
                    {dropDownButton(myRequestsButton)}
                    {table(tableObj)}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}


