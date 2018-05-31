//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

//class that creates the body of the contractor management screen
class ContractorManagment extends React.Component {
  render() {
    return (
      <div>
        <div id="Contractor_Management_Screen">
          <div className="container">
                {/*Important Links section*/}
                <h3>Important Links</h3>
                <br/>
                <div className="panel panel-success">
                    <div className="panel-heading">Important Links</div>
                    <div className="panel-body">
                      <ul>
                        <li>Contractor Policy <a href="url">The CenturyLink policy regarding use of Supplemental Staff</a><br/></li>
                        <li>Management of Contractors <a href="url">Guidance regarding selection of individuals as contractors, and appropriate treatment of those individuals while assigned at CenturyLink</a></li>
                      </ul>
                    </div>
                </div>
                  {/*work flow section*/}
                  <h3>Work Flows</h3>
                  {/*panel to find contractors*/}
                  <div className="panel panel-success">
                      <div className="panel-heading"><center>Find Contractors</center></div>
                      <div className="panel-body">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-6">Vendor List for Non-It Contractors</div>
                            <div className="col-md-6">Used for Finding an Approved Vendor Provided Contractor</div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">Process for ITS Contractors</div>
                            <div className="col-md-6">Used for Finding an Approved Vendor Provided Contractor</div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">Vendor List for Non-It Contractors Links</div>
                            <div className="col-md-6">Used for Finding an Approved Vendor Provided Contractor</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/*panel for provision contractors*/}
                  <div className="panel panel-success">
                    <div className="panel-heading"><center>Provision Contractors</center></div>
                      <div className="panel-body">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-6">New Contractor ID Provisioning V2</div>
                            <div className="col-md-6">New Contractor ID Provisioning</div>
                          </div>
                          <br/>
                          <div className="row">
                            <div className="col-md-6">New Contractor ID Provisioning V3</div>
                            <div className="col-md-6">New Contractor ID Provisioning</div>
                          </div>
                      </div>
                    </div>
                  </div>
                {/*panel to manage contractors*/}
                  <div className="panel panel-success">
                      <div className="panel-heading"><center>Manage Contractors</center></div>
                      <div className="panel-body">
                        <table class="table table-bordered table-hover">
                        <tbody>
                          <tr>
                            <td>Display My People</td>
                            <td>Displays all individuals assigned to the person that is logged in</td>
                          </tr>
                          <tr>
                            <td>Update/Extend/Terminate a Contractor</td>
                            <td>Displays all individuals assigned to the person that is logged in</td>
                          </tr>
                          <tr>
                            <td>Mass Contractor End Date Update</td>
                            <td>Displays all individuals assigned to the person that is logged in</td>
                          </tr>
                          <tr>
                            <td>New Mass Contractor End Date Update</td>
                            <td>Displays all individuals assigned to the person that is logged in</td>
                          </tr>
                          <tr>
                            <td>Update/Extend/Terminate a Contractor </td>
                            <td>Displays all individuals assigned to the person that is logged in</td>
                          </tr>
                        </tbody>
                      </table>
                      </div>
                  </div>
                </div>
            </div>
        </div>
    );
  }
}

//screen to view contracotr managment
export default class ContractorManagmentScreen extends Component {
  render(){
    return(
      <div>
        <Navigation/>
        <ContractorManagment/>
      </div>
    );
  }
}