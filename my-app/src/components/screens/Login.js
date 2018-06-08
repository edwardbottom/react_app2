//imports react libraries and class imports
import React, { Component } from 'react';

//renders a static login screen
export default class LoginScreen extends React.Component {
  render() {
    return (
      <div>
        {/*css to center the panel for the login form*/}
        <style>{"\
        .container{\
          display: flex;\
          justify-content: center;\
          align-items: center;\
        }\
      "}
      <br/>
      <br/>
      </style>
      {/*tentative image logo*/}
      <center>
          <img src="https://www.comaudit.com/wp-content/uploads/2016/01/CenturyLink-logo.jpg" alt="CenturyLink Logo"></img>
      </center>
      <br/>
      <br/>
      <div className="container">
      {/*login form and panel*/}
      <div class="col-lg-3 col-lg-3">
        <div class="large-box">
          <div className="panel panel-success">
            <div className="panel-heading"><center><strong>Login</strong></center></div>
              <div className="panel-body">
                <center>
                  <form action="/I_hate_php.php">
                    <div className="form-group">
                      <label for="username">Username:</label>
                      <input type="username" class="form-control" id="username" placeholder="username"></input>
                    </div>
                    <div className="form-group">
                      <label for="pwd">Password:</label>
                      <input type="password" className="form-control" id="pwd" placeholder="password"></input>
                    </div>
                    <div className="checkbox">
                      <label><input type="checkbox"></input> Remember me</label>
                    </div>
                    <a href="/home" className="btn btn-success" role="button">Login</a><br/><br/>
                    <a href="http://somelink.com">Get WSS</a>
                  </form>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}


