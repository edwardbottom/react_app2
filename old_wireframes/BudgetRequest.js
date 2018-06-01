//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

//class that creates the body of the Budget screen
class BudgetRequest extends React.Component {
  render() {
    return (
    	<div>
    		<div id="Budget_Request_screen">
    			<div className="container">
          			{/*Budget Request section*/}
          			<h3>Budget Requests</h3>
          			<p>This will contain the Budget Requests</p>
          			<br/>
          			<br/>
          			<br/>
          			<div className="panel-group">
            			{/*work flow section*/}
            			<h3>Work Flows</h3>
            			{/*link and description for work flows*/}
            			<div className="panel panel-success">
              				<div className="panel-heading">Revision to Furniture, Equipment, and Vehicle Budget Requests</div>
              				<div className="panel-body">	Used to add or delete a resource from the company or department budget. </div>
            			</div>
            			<div className="panel panel-success">
              				<div className="panel-heading">Vehicle Change/Transfer Request</div>
              				<div className="panel-body">Used to transfer a vehicle to a new driver and company or department</div>
            			</div>
          			</div>
        		</div>
    		</div>
    	</div>
    	);
  	}
}

//screen to view previous requests
export default class BudgetRequestScreen extends Component {
  render(){
    return(
      <div>
        <Navigation/>
        <BudgetRequest/>
      </div>
    );
  }
}