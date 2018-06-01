//imports react libraries and navbar
import React from 'react';
import { Link } from 'react-router-dom';

//exported class for the navbar
export default class Navigation extends React.Component {
  render() {
    return (
      <div id="navigation">
      {/*navigation bar styling */}
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/home"><strong>WSS</strong> By CenturyLink</a>
            </div>
          {/*navigation bar links*/}
          <ul className="nav navbar-nav">
            <li><a id="my_tasks_listener" href="/home" onClick="loadMyTasks();">My Tasks</a></li>
            <li><a id="access_request_listener" href="/accessrequest" onClick="loadAccessRequest();">Access Request</a></li>
            <li><a id="budget_request_listener" href="/budgetrequests" onClick="loadBudgetRequest();">Budget Request</a></li>
            <li><a id="contractor_management_listener" href="/contractormanagement" onClick="loadContractorManagement();">Contractor Management</a></li>
            <li><a id="real_estate_listener" href="/realestate" onClick="loadRealEstate();">Real Estate</a></li>
            <li><a id="user_tools_listener" href="/usertools" onClick="loadUserTools();">User Tools</a></li>
            <li><a id="voice_and_data_services_listener" href="/voiceanddataservices" onClick="loadVoiceAndDataServices();">Voice and Data Services</a></li>
            <li><a id="dynamic_screen" href="/dynamic"> Dynamic </a> </li>
          </ul>
        {/*search bar */}
          <form className="navbar-form navbar-right" action="/action_page.php">
            <div className="input-group">
              <input type="text" class="form-control" placeholder="Search WSS Content"></input>
              <div className="input-group-btn">
                <button className="btn btn-default" type="submit">
                  <i className="glyphicon glyphicon-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </nav>
    </div>
    );
  }
}