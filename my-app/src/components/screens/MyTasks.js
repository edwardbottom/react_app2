//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

//class that creates the body of the my tasks screen
class MyTasks extends React.Component {
  render() {
  	return (
    <div id="My_Tasks_Screen">
  		<div className="container">
    		<form className="navbar-form navbar-right" action="/action_page.php">
      			{/*button to view previous requests*/}
      			<Link to="/history"> <button type="button" className="btn btn-success" id="view_old_requests_and_tasks" onPress={() => this.props.navigation.navigate('History')} >View History</button> </Link>
      			<div className="input-group">
        			{/*search bar for previous requests*/}
        			<input type="text" className="form-control" placeholder="Search Corperate Directory"></input>
          			<div className="input-group-btn">
            			<button className="btn btn-default" type="submit">
              				<i className="glyphicon glyphicon-search"></i>
            			</button>
          			</div>
        		</div>
    		</form>
   			<div className="row">
       			<div className="col-md-4"> 
       			{/*tasks column with drop down menue*/}
        			<div className="dropdown">
          				<button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            				My Tasks
          				</button>
          				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            				<a className="dropdown-item" href="#">Sort Ascending</a>
            				<a className="dropdown-item" href="#">Sort Descending</a>
            				<a className="dropdown-item" href="#">Configure Sort</a>
            				<a className="dropdown-item" href="#">Auto Fit</a>
          				</div>
        			</div>
          			<table className="table table-striped table-bordered table-hover">
          			{/*table headers*/}
          				<thead>
            				<tr>
              					<th scope="col">Desciption</th>
              					<th scope="col">Requested</th>
          					</tr>
        				</thead>
        				<tbody>
          				{/*iteam in table */}
            				<tr>
              					<th scope="row"> A Task</th>
              					<td>This will be automated by React</td>
            				</tr>
            				<tr>
              					<th scope="row">A Task</th>
              					<td>This will be automated by React</td>
            				</tr>
            				<tr>
              					<th scope="row">A Task</th>
              					<td>This will be automated by React</td>
            				</tr>
        				</tbody>
        			</table>
       			</div>
       		<div className="col-md-4"> 
          		<div className="dropdown">
          			{/*column for requests*/}
          			<button class="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            			My Requests
          			</button>
          			{/*drop down menue options */}
          			<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            			<a clasNames="dropdown-item" href="#">Sort Ascending</a>
            			<a className="dropdown-item" href="#">Sort Descending</a>
            			<a className="dropdown-item" href="#">Configure Sort</a>
            			<a className="dropdown-item" href="#">Auto Fit</a>
          			</div>
        		</div>
          		<table className="table table-striped table-bordered table-hover">
            		<thead>
              		{/*table headers*/}
              		<tr>
                		<th scope="col">Name</th>
                		<th scope="col">Date</th>
              		</tr>
            		</thead>
          			<tbody>
            			{/*table iteam */}
            			<tr>
              				<th scope="row"> A Task</th>
              				<td>This will be automated by React</td>
            			</tr>
            			<tr>
              				<th scope="row">A Task</th>
              				<td>This will be automated by React</td>
            			</tr>
            			<tr>
              				<th scope="row">A Task</th>
              				<td>This will be automated by React</td>
            			</tr>
        			</tbody>
        		</table>
       		</div>
    	</div>
  	</div>
</div>
)}
}

//class for the my tasks/home screen
export default class HomeScreen extends Component {
  render(){
    return(
      <div>
        <Navigation />
        <MyTasks />
      </div>
    );
  }
}
