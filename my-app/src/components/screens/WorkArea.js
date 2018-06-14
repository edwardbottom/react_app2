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

let textObj = new Object();
textObj.header = "Access Request";
textObj.description = "Tools to manage system and application access.";

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

//renders the access request screen
export default class WorkAreaScreen extends React.Component {
  render() {
    return (
      <div>
      <style>{"\
        .container{\
          width:75%;\
          height:80%;\
        }\
      "}</style>
        {createNavBar(navBarObj)}
        <div className="container">
          <center><h2>New Application Access Request Form</h2></center><br/>
          <form>
            <div id="radio_form" style={{textAlign:'center'}}>
              <strong><p>Search Type:</p></strong>
              <div className="radio">
                <label for="human_request">Human Request:</label><br/>
                <input type="radio" name="optradio" id="human_request"></input>
              </div>
              <br/>
              <div className="radio">
                <label for="non_human_request">Non-Human Request:</label><br/>
                <input type="radio" name="optradio" id="non_human_request"></input>
              </div>
            </div>
            <br/>
          </form>

          <form>
          <p> Select User(s) for this search </p>
          <div className="form-group">
            <div className="col-xs-3">
              <label for="last_name">Last Name</label>
              <input type="text" className="form-control input-sm" id="last_name" placeholder="Last Name"></input>
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-3">
              <label for="first_name">First Name</label>
              <input type="text" className="form-control input-sm" id="first_name" placeholder="First Name"></input>
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-3">
              <label for="sap_id">Sap ID</label>
              <input type="text" className="form-control input-sm" id="sap_id" placeholder="SAP ID"></input>
            </div>
          </div>

          <div className="form-group">
            <div className="col-xs-3">
              <label for="first_name">ADID</label>
              <input type="text" className="form-control input-sm" id="adid" placeholder="use comma (,) for multiple ADID search"></input>
            </div>
          </div>

          <br/>
          <div className="form-group" style={{textAlign:'right'}}>
            <button type="button" className="btn btn-success" id="search_user_v2">Search</button>
          </div>
          <center>
          <div className="col-sm-6">
            <div className="panel panel-default">
              <div className="panel-heading">Search Results</div>
              <div className="panel-body ">
                <table className="table table-condensed table-summary table-borderless ">
                  <tbody>
                    <tr>
                      <td className="summary-heading">Search</td>
                      <td className="summary-content">Results</td>
                    </tr>
                    <tr>
                      <td className="summary-heading">Search</td>
                      <td>Results</td>
                    </tr>
                    <tr>
                      <td className="summary-heading">Search</td>
                      <td>Results</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <center>
              <a href="/accessrequest" className="btn btn-primary" role="button">Cancel</a>
            </center>
          </div>
          </center>

          <center>
          <div className="col-sm-6">
            <div className="panel panel-default">
              <div className="panel-heading">Selected Users</div>
                <div className="panel-body ">
                  <table className="table table-condensed table-summary table-borderless ">
                    <tbody>
                      <tr>
                        <td className="summary-heading">Selected</td>
                        <td className="summary-content">User</td>
                      </tr>
                      <tr>
                        <td>Selected</td>
                        <td>User</td>
                      </tr>
                      <tr>
                        <td>Selected</td>
                        <td>User</td>
                      </tr>
                    </tbody>
                </table>
              </div>
            </div>
            <center>
              <a href="/accessrequest" className="btn btn-success" role="button">Submit Changes</a>
            </center>
          </div>
          </center>
      </form>
      <div>

      </div>
    </div>
    </div> 
    );
  }
}


