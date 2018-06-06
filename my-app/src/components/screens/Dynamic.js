//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, linksPanel, createCenterPanels, centerPanelWithRows, centerPanelWithTable} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton, buttonWithLink} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';

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

let linksHead = new Object();
linksHead.header = "Important Links";

let linksPanelO = new Object();
linksPanelO.route = "/route";
linksPanelO.header = "Important Links";

let linkObj = new Object();
linkObj.route="www.awebsite.com";
linkObj.text="this is a link";

linksPanelO.linkList = [];
linksPanelO.linkList.push(linkObj);
linksPanelO.linkList.push(linkObj);

let headerObj = new Object();
headerObj.header = "Work Flow";

let findContractors = new Object();
findContractors.header = "Find Contractors";

let provisionContractors = new Object();
provisionContractors.header = "Provision Contractors";
provisionContractors.body = [];
let rowObj = new Object();
rowObj.task = "This is a task";
rowObj.description = "that will come from the database";
provisionContractors.body.push(rowObj);
provisionContractors.body.push(rowObj);
provisionContractors.body.push(rowObj);

let manageContractors = new Object();
manageContractors.header = "Manage Contractors";
manageContractors.body = [];
manageContractors.body.push(rowObj);
manageContractors.body.push(rowObj);
manageContractors.body.push(rowObj);

let tablePanel = new Object();
tablePanel.header = "Manage Contractors";
tablePanel.route = "/route";
tablePanel.tableContents = [];
let rowObject = Object();
rowObject.task = "A task";
rowObject.description = "and a description";
tablePanel.tableContents.push(rowObject);
tablePanel.tableContents.push(rowObject);
tablePanel.tableContents.push(rowObject);
tablePanel.tableContents.push(rowObject);
tablePanel.tableContents.push(rowObject);
tablePanel.tableContents.push(rowObject);

//renders a screen that will not be used in the ui, but is used during development 
//to test react features
export default class DynamicBodyScreen extends React.Component {
  render() {
    return (
      <div>
          {createNavBar(navBarObj)}
          <div className="container">
            <div id="Contractor_Management_Screen">
              <div className="container">
                {header(linksHead)}
                {linksPanel(linksPanelO)}
                {header(headerObj)}
                {centerPanelWithRows(provisionContractors)}
                {centerPanelWithRows(manageContractors)}
                {centerPanelWithTable(tablePanel)}
              </div>
            </div>
          </div>
      </div>
    );
  }
}


