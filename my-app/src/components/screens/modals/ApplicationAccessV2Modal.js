import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//class for the change password pop up modal
export default class ApplicationAccessV2Modal extends Component {
  render(){
    return(
      <div>
        {/*pop up modal for application access v2 modal*/}
        <div className="modal fade" id="application-access-v2-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
            {/*modal form for access*/}
              <div className="modal-body">
                <h2>New Application Access Request Form</h2><br/>
                {/*radio buttons*/}
                <form>
                  <div id="radio_form" style="text-align:center">
                    <strong><p>Search Type:</p></strong>
                    <div className="radio">
                      <label><input type="radio" name="optradio" id="human_request">Human Request</input></label>
                    </div>
                    <div className="radio">
                      <label><input type="radio" name="optradio" id="non_human_request">Non-Human Request</input></label>
                    </div>
                  </div>
                </form>
                {/*form to search for a user*/}
                <form>
                  <p> Select User(s) for this search </p>
                  <div className="form-group">
                    <div className="col-xs-3">
                      <label for="last_name">Last Name</label>
                      <input type="text" className="form-control input-sm" id="last_name" placeholder="Last Name"></input>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-xs-3">
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
                  <br>
                  {/*search button for finding a user*/}
                  <div className="form-group" style="text-align:right">
                    <button type="button" className="btn btn-success" id="search_user_v2">Search</button>
                  </div>
                  {/*table to display search results*/}
                  <div className="col-sm-5">
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
                    </div>
                  {/*table to display selected users*/}
                  <div className="col-sm-5">
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
                    </div>
                  </div>
                </form>
                {/*stage and submit buttons*/}
                <div className="modal-footer">
                  <button type="button" className="btn" id="stage_application_request_access">Stage Changes</button>
                  <input type="submit " id="submit_application_request_access" Name="btn btn-success" value="Submit Changes" data-dismiss="modal"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }