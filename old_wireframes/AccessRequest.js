//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

//class that creates the body of the acccess request screen
class AccessRequest extends React.Component {
  render() {
    return (
      <div id="Access_Request_Screen">
        <div className="container">
          {/*Access Request section*/}
          <h3>Access Request</h3>
          <p>Tools to manage system and application access.</p>
          <div className="panel-group">
            {/*work flow section*/}
            <h3>Work Flows</h3>
            {/*link and description for work flows*/}
            <div className="panel panel-success">
              <div className="panel-heading">Cloud SUDO Access</div>
              <div className="panel-body">Request Cloud SUDO Access </div>
            </div>
            <div className="panel panel-success">
              <div className="panel-heading">Unix Access</div>
              <div className="panel-body">Request UNIX Access. If you need help requestion access, please, click here</div>
            </div>
            <div className="panel panel-success">
              <div className="panel-heading">Bulk Password Reset Request</div>
              <div className="panel-body">Request user password reset for organizations with extended user count</div>
            </div>
            <div className="panel panel-success">
              <div className="panel-heading">AAUR (Access Another User(s) Resources</div>
              <div className="panel-body">For Business Continuity. To gain access to Email, information on hard drive, or share folders/home drives of Terminated or Users on Disability. If you need help requesting access, please click here. For obtaining information on Active employees please consult with your HR Business Partner (HRBP)</div>
            </div>
            <div className="panel panel-success">
              <div className="panel-heading"><a href="#" data-toggle="modal" data-target="#application-access-v2-modal">Application Access V2</a></div>
              <div className="panel-body">Request access to Applications within the following environments: Regular, Intelligent Desktop (ID) and CTLAccess SSO. If you need help requesting access, please click here</div>
            </div>
            <div className="panel panel-success">
              <div className="panel-heading">Application Global Group(s) & CITRIX ICON</div>
              <div className="panel-body">Request access to CITRIX ICON and Application Global Group(s). CITRIX access publishes the CITRIX ICON that is used in CTL CITRIX for user(s). Application Global Group(s) access provides rights and permissions to a group of user(s) needing access to a specific Application(s). If you need help requesting access, please click here</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//class for the access request screen
export default class AccessRequestScreen extends Component {
  render(){
    return(
      <div>
        <Navigation/>
        <AccessRequest />
      </div>
    );
  }
}

