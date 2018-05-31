//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import ChangePasswordModal from './modals/ChangePasswordModal';

//class that create the body of the user tools page
class UserTools extends React.Component {
  render() {
    return (
      <div id="User_Tools_Screen">
        <div className="container">
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
export default class UserToolsScreen extends Component {
  render(){
    return(
      <div>
        <Navigation/>
        <UserTools/>
        
      </div>
    );
  }
}

