//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

//class that creates the body of the contractor management screen
class RealEstate extends React.Component {
  render() {
    return (
      <div>
        <div id="Budget_Estate_Screen">
          <div className="container">
                {/*Real Estate Panel*/}
                <div className="panel panel-success">
                  <div className="panel-heading"><a href="url"><center>Real Estate</center></a></div>
                  <div className="panel-body">Support work space assignment and updates with optional changes to existing services including: Telephone service, Hardware reallocation, and mover requirements. In addition, the requisition and management of furniture to work locations.</div>
                </div>
                {/*Access Request section*/}
                <h3>Important Links</h3>
                <br/>
                <div className="panel panel-success">
                    <div className="panel-heading">Important Links</div>
                    <div className="panel-body">
                      <ul>
                        <li>Space Management <a href="url">Support management of workspace assignment, occupancy and relocation.</a><br/></li>
                        <li>Funiture Management <a href="url">Support management of workspace assignment, occupancy and relocation.</a><br/></li>
                        <li>Space Management <a href="url">Support management of workspace assignment, occupancy and relocation.</a><br/></li>
                        <li>Furniture Request <a href="url">Support management of workspace assignment, occupancy and relocation.</a><br/></li>
                      </ul>
                    </div>
                </div>
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
          </div>
        );
      }
    }

//screen to view contractor managment
export default class RealEstateScreen extends Component {
  render(){
    return(
      <div>
        <Navigation/>
        <RealEstate/>
      </div>
    );
  }
}