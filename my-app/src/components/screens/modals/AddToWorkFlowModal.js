import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//class for the change password pop up modal
export default class AddToWorkFlowModal extends Component {
  render(){
    return(
      <div>
        {/*Modal for adding new work flow items*/}
        <div className="modal fade" id="work_flow_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: none;">
          <div className="modal-dialog">
            <div className="loginmodal-container">
              {/*modal form*/}
                <h1>New Work Flow Iteam</h1><br/>
                <form>
                  <input type="text" id="work_flow_name" placeholder="Work Flow Name"></input>
                  <input type="text" id="work_flow_description" placeholder="Work Flow Description"></input>
                  <input type="submit" id="work_flow_submit" className="login loginmodal-submit" value="Submit"></input>
                  {/*todo: write a listener to add the work flow to the list*/}
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }