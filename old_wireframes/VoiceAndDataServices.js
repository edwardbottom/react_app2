//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';

//class that creates the body of the user tools page
class VoiceAndDataServices extends React.Component {
  render() {
    return (
      <div id="User_And_Data_Services_Screens">
        <div className="container">
        {/*Voice and Data Services Panel*/}
          <div className="panel panel-success">
              <div className="panel-heading"><a href="url"><center>Voice and Data Services</center></a></div>
              <div className="panel-body">Tools to manage and provision phone, network and other voices services.</div>
          </div>
        {/*Important Links Panel*/}
          <div className="panel panel-success">
            <div className="panel-heading"><center>Important Links</center></div>
              <div className="panel-body">
                <ul>
                  <li>Space Management <a href="url">Support management of workspace assignment, occupancy and relocation.</a><br/></li>
                  <li>Funiture Management <a href="url">Support management of workspace assignment, occupancy and relocation.</a><br/></li>
              </ul>
            </div>
          </div>
         {/*user tools section*/}
          <h3>User Tools</h3>
          <p> null</p>
        <div className="panel-group">
          {/*work flow section*/}
          <h3>Work Flows <button type="button" className="btn btn-success" data-toggle="modal" data-target="#work_flow_modal">
          Add To Work Flow </button></h3>
          {/*link and description to change the users password*/}
          <div id="change_password" className="panel panel-success">
            <div className="panel-heading"><a href="#" data-toggle="modal" data-target="#change-password-modal">Change User Password</a></div>
            <div className="panel-body">Changes a users password when clicked </div>
          </div>
          <div className="panel panel-success">
            <div className="panel-heading">(Bug-Fix) Password Reset Request</div>
            <div className="panel-body">(BUG-FIX)Request user password reset.</div>
          </div>
          <div className="panel panel-success">
            <div className="panel-heading">Bulk Password Reset Request</div>
            <div className="panel-body">Request user password reset for organizations with extended user count</div>
          </div>
          <div className="panel panel-success">
            <div className="panel-heading">CTL DOMAIN PASSWORD RESET</div>
            <div className="panel-body">Request user domain password reset</div>
          </div>
          <div className="panel panel-success">
            <div className="panel-heading">Panel with panel-success class</div>
            <div className="panel-body">Panel Content</div>
          </div>
          <div className="panel panel-success">
            <div className="panel-heading">Panel with panel-success class</div>
            <div className="panel-body">Panel Content</div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

//class for the user tools screen 
export default class VoiceAndDataServicesScreen extends Component {
  render(){
    return(
      <div>
        <Navigation/>
        <VoiceAndDataServices/>
      </div>
    );
  }
}

