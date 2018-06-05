//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, collapsePanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';
import {input, modalLink, basicModal, modalButton} from './objects/forms';

//random data
let one = new Object();
one.route = "#";
one.header = "Change User Password (modal)";
one.target = "#change-password-modal";
one.body = "Changes a Users Password When Clicked";
let onee = new Object();
onee.route = "#";
onee.header = "Change User Password (non modal)";
//onee.target = "#change-password-modal";
onee.inputArray = [];
onee.body = "Changes a Users Password When Clicked";
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
list.push(onee);
list.push(two);
list.push(three);
list.push(four);
list.push(five);
list.push(six);


let textObj = new Object();
textObj.header = "User Tools";
textObj.description = "null";

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

let changePasswordModal = new Object();
changePasswordModal.header = "Change User Password";
changePasswordModal.id = "change-password-modal";
changePasswordModal.inputArray = [];
let username = new Object();
username.type = "text";
username.id = "username";
username.placeholder = "username";
let oldPassword = new Object();
oldPassword.type = "password";
oldPassword.id = "oldPassword";
oldPassword.placeholder = "old password";
let newPassword = new Object();
newPassword.type = "password";
newPassword.id = "newPassword";
newPassword.placeholder = "new password";
let reNewPassword = new Object();
reNewPassword.type = "password";
reNewPassword.id = "reNewPassword";
reNewPassword.placeholder = "new password";
changePasswordModal.inputArray.push(username);
changePasswordModal.inputArray.push(oldPassword);
changePasswordModal.inputArray.push(newPassword);
changePasswordModal.inputArray.push(reNewPassword);
onee.inputArray.push(username);
onee.inputArray.push(oldPassword);
onee.inputArray.push(newPassword);
onee.inputArray.push(reNewPassword);
onee.target="#change-user-password";
onee.description="Changes a Users Password When Clicked";
onee.id = "change-user-password";

let addToWorkFlowModal = new Object();
addToWorkFlowModal.header = "Add to Work Flow";
addToWorkFlowModal.id = "add-to-workflow-modal";
addToWorkFlowModal.inputArray = [];
let taskName = new Object();
taskName.type = "text";
taskName.id = "task";
taskName.placeholder = "Task Name";
let taskDescription = new Object();
taskDescription.type = "text";
taskDescription.id = "taskDescription";
taskDescription.placeholder = "Task Description";
addToWorkFlowModal.inputArray.push(taskName);
addToWorkFlowModal.inputArray.push(taskDescription);

let workFlowModalButton = new Object();
workFlowModalButton.target = "#add-to-workflow-modal";
workFlowModalButton.text = "Add to Work Flow"
//class to render the usertools screen
export default class UserToolsScreen extends React.Component {
  render() {
    return (
      <div>
          {createNavBar(navBarObj)}
          <div className="container">
            {headerAndDescription(textObj)}
            {header(headerObj)}
            {modalButton(workFlowModalButton)}
            <br/>
            <br/>
            {collapsePanel(onee)}
            {createPanels(list)}
            {basicModal(changePasswordModal)}
            {basicModal(addToWorkFlowModal)}
          </div>
      </div>
    );
  }
}


