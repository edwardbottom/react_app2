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

//renders the access request screen
export default class ChangePasswordScreen extends React.Component {
  render() {
    return (
      <div>
        <style>{"\
        .divider{\
          width:5px;\
          height:auto;\
          display:inline-block;\
        }\
      "}</style>
        {createNavBar(navBarObj)}
        <div className="container">
          <div class="form-group">
            <label for="usr">Name:</label>
            <input type="text" class="form-control" id="usr"></input>
          </div>
          <div class="form-group">
            <label for="opwd">Old Password:</label>
            <input type="password" class="form-control" id="opwd"></input>
          </div>
          <div class="form-group">
            <label for="npwd">New Password:</label>
            <input type="password" class="form-control" id="npwd"></input>
          </div>
          <div class="form-group">
            <label for="rpwd">Re-Enter New Password:</label>
            <input type="password" class="form-control" id="rpwd"></input>
          </div>
          <a href="/usertools" className="btn btn-primary" role="button">Cancel</a>
          <div class="divider"/>
          <a href="/usertools" className="btn btn-success" role="button">Submit Changes</a>
        </div> 
      </div>
    );
  }
}


