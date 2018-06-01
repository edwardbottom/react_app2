//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, linksPanel, createCenterPanels} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
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

let otherSearchBar = new Object();
otherSearchBar.router = "phpIsTheWorst";
otherSearchBar.placeholder = "Search Corperate Directory";

navBarObj.searchbar = searchBar;

export default class DynamicBodyScreen extends React.Component {
  render() {
    return (
      <div>
          {createNavBar(navBarObj)}
          <div className="container">
              <div id="My_Tasks_Screen">
      <div className="container">
        {rightSearchBar(otherSearchBar)}
        <div className="row">
            <div className="col-md-4"> 
            {/*tasks column with drop down menue*/}
              <div className="dropdown">
                  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    My Tasks
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Sort Ascending</a>
                    <a className="dropdown-item" href="#">Sort Descending</a>
                    <a className="dropdown-item" href="#">Configure Sort</a>
                    <a className="dropdown-item" href="#">Auto Fit</a>
                  </div>
              </div>
                <table className="table table-striped table-bordered table-hover">
                {/*table headers*/}
                  <thead>
                    <tr>
                        <th scope="col">Desciption</th>
                        <th scope="col">Requested</th>
                    </tr>
                </thead>
                <tbody>
                  {/*iteam in table */}
                    <tr>
                        <th scope="row"> A Task</th>
                        <td>This will be automated by React</td>
                    </tr>
                    <tr>
                        <th scope="row">A Task</th>
                        <td>This will be automated by React</td>
                    </tr>
                    <tr>
                        <th scope="row">A Task</th>
                        <td>This will be automated by React</td>
                    </tr>
                </tbody>
              </table>
            </div>
          <div className="col-md-4"> 
              <div className="dropdown">
                {/*column for requests*/}
                <button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  My Requests
                </button>
                {/*drop down menue options */}
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a clasNames="dropdown-item" href="#">Sort Ascending</a>
                  <a className="dropdown-item" href="#">Sort Descending</a>
                  <a className="dropdown-item" href="#">Configure Sort</a>
                  <a className="dropdown-item" href="#">Auto Fit</a>
                </div>
            </div>
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  {/*table headers*/}
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/*table iteam */}
                  <tr>
                      <th scope="row"> A Task</th>
                      <td>This will be automated by React</td>
                  </tr>
                  <tr>
                      <th scope="row">A Task</th>
                      <td>This will be automated by React</td>
                  </tr>
                  <tr>
                      <th scope="row">A Task</th>
                      <td>This will be automated by React</td>
                  </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
</div>
          </div>
      </div>
    );
  }
}


