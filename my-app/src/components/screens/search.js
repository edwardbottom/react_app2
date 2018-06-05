//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, linksPanel, createCenterPanels} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton, buttonWithLink} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {createNavBar} from './objects/navbar';
import {createPills} from './objects/pills';


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


let headerObj = new Object();
headerObj.header = "Search Results";

let one = new Object();
one.route = "link";
one.header = "Revision to Furniture, Equipment, and Vehicle Budget Requests";
one.body = "Used to add or delete a resource from the company or department budget.";
let two= new Object();
two.route = "link";
two.header = "Vehicle Change/Transfer Request"
two.body = "Used to transfer a vehicle to a new driver and company or department"


let list = [];
list.push(one);
list.push(two);

//renders the screen for my tasks
export default class SearchScreen extends React.Component {
  render() {
    return (
      <div>
          {createNavBar(navBarObj)}
          <div className="container">
            <div id="Search_Screen">
              <div className="container">
                {header(headerObj)}
                {createPanels(list)}
              </div>
            </div>
          </div>
      </div>
    );
  }
}


