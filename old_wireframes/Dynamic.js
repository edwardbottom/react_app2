//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {welcome, panel, createPanels, centerPanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';

let prop = {name: "React is amazing"};
const element = welcome(prop);
//class for the user tools screen 

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




class DynamicBody extends React.Component {
  render() {
    return (
      <div>
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
        <Navigation/>
        <DynamicBody/>
      </div>
    );
  }
}

