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

let otherSearchBar = new Object();
otherSearchBar.router = "phpIsTheWorst";
otherSearchBar.placeholder = "Search Corperate Directory";


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
  //constructor and state intialization
  constructor(props) {
    super(props);
    this.state = {navData:this.props.navData,
      content:null,
      //url:this.props.url
      //url:"http://localhost:3004/content"
    };
  };

  //state life cycle
  componentDidMount() {
      //axios.get(this.state.url)
      //.then(res => {
        //const content = res.data;
        //this.setState({ content });
      //})
  }

  render() {
    return (
      <div>
          {createNavBar(this.state.navData)}
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


