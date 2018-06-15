//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';
import {formGroup, formGroups, buttonWithRoute} from './objects/forms';

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

let formGroup1 = new Object();
formGroup1.label = "UserName: ";
formGroup1.type = "text";
formGroup1.id = "usr";
let formGroup2 = new Object();
formGroup2.label = "Old Password: ";
formGroup2.type = "password";
formGroup2.id = "opass";
let formGroup3 = new Object();
formGroup3.label = "New Password: ";
formGroup3.type = "password";
formGroup3.id = "npass";
let formGroup4 = new Object();
formGroup4.label = "ReRenter New PAssword";
formGroup4.type = "password";
formGroup4.id = "rnpass";

let formGroupArray = [];
formGroupArray.push(formGroup1);
formGroupArray.push(formGroup2);
formGroupArray.push(formGroup3);
formGroupArray.push(formGroup4);

let formGroupObj = new Object();
formGroupObj.inputArray = formGroupArray;

let confirmButton = new Object();
confirmButton.route = "/usertools";
confirmButton.class = "btn btn-success";
confirmButton.label = "Submit";
let cancelButton = new Object();
cancelButton.route = "/usertools";
cancelButton.class = "btn btn-primary";
cancelButton.label = "Cancel";

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
          {formGroups(formGroupObj)}
          {buttonWithRoute(cancelButton)}
          <div class="divider"/>
          {buttonWithRoute(confirmButton)}
          
        </div>
      </div>
    );
  }
}


