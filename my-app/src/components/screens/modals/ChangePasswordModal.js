import React, { Component } from 'react';
import { Link } from 'react-router-dom';


//class for the change password pop up modal
export default class ChangePasswordModal extends Component {
  render(){
    return(
      <div>
        {/*pop up modal to change the users password*/}
        <div className="modal fade" id="change-password-modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
          <div className="modal-dialog">
            <div className="loginmodal-container">
              {/*modal form for changing passwords*/}
              <h1>Change User Password</h1><br/>
              <form>
                <input type="text" id="username" placeholder="Username"></input>
                <input type="password" id="old_password" placeholder="Old Password"></input>
                <input type="password" id="new_password" placeholder="New Password"></input>
                <input type="password" id="renew_password" placeholder="Re-Enter New Password"></input>
                <input type="submit" id="new_password_submit" class="login loginmodal-submit" value="Change Password"></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}