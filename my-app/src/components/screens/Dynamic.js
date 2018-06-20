//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, linksPanel, createCenterPanels, centerPanelWithRows, centerPanelWithTable, collapsePanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton, buttonWithLink} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';
import axios from 'axios';
import {modalButton, basicModal} from './objects/forms';
import {get, post, processRequest} from './services/requests';
import {textGroup, textGroups, textArea, singleSelect, multipleSelect, radioForm, checkBox} from './objects/FormGroup';

//random data
var hhhheader = new Object();
hhhheader.header = "This is the header";
hhhheader.description = "and description of a dynamic template";

var sHeader = new Object();
sHeader.header = "Work Flows";

//random data
var navBarObj = new Object();
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

//random data
let one = new Object();
one.route = "link";
one.header = "Revision to Furniture, Equipment, and Vehicle Budget Requests";
//one.body = "Used to add or delete a resource from the company or department budget.";
let two= new Object();
two.route = "link";
two.header = "Vehicle Change/Transfer Request"
two.body = "Used to transfer a vehicle to a new driver and company or department"


let list = [];
list.push(one);
list.push(two);

//creates a screen using an array of component objects
function createScreen(props){
  if(props.length > 0){
        return(
          <div>
            {props.map(inputObj => {
              if(inputObj.type === "header"){
                  return (
                    <div>
                      {header(inputObj)}
                      <br/>
                    </div>
                )
                }
                else if(inputObj.type == "headerAndDescription"){
                  return (
                    <div>
                      {headerAndDescription(inputObj)}
                    </div>
                  ) 
                }
                else if(inputObj.type == "linksPanel"){
                  return(
                    <div>
                      {linksPanel(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.type =="createPanels"){
                  return(
                    <div>
                      {createPanels(inputObj.list)}
                    </div>
                  )
                }
              return null
            })}
         </div>
        )
      }
  else{
    return (
      <p> Not a valid props </p>
    )
  }     
}
export default class DynamicBodyScreen extends React.Component {
  //constructor and state intialization
  constructor(props) {
    super(props);
    console.log(this.props.navData);
    this.state = {nav:this.props.navData,
      content:null,
      //url:this.props.url
      url:"http://localhost:3004/content"
    };
  };

  //state life cycle
  componentDidMount() {
      axios.get(this.state.url)
      .then(res => {
        const content = res.data;
        this.setState({ content });
      })
  }
  //renders the html
  render() {
    return (
      <div>
        {createNavBar(this.state.nav)}
          {<div className="container">
            {this.state.content && this.state.content.length && <div> {createScreen(this.state.content)} </div>}
          </div>}
      </div>
    );
  }
}


