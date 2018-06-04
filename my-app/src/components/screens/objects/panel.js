//imports react 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {table, tableWithoutHeader} from 'table';

//hello world function
export function welcome(props){
	return <h1>Hello, {props.name}</h1>;
}

//creates a panel using an object with a route, header, and body
export function panel(props){
	return(
      	<div className="panel panel-success">
        	<div className="panel-heading"><a href={props.route}>{props.header}</a></div>
        	<div className="panel-body">{props.body}</div>
        </div>
    );
}

//creates a panel with a centered header using an object with a route, header and body
export function centerPanel(props){
	return(
		<div className="panel panel-success">
            <div className="panel-heading"><a href={props.route}><center>{props.header}</center></a></div>
            <div className="panel-body">{props.body}</div>
        </div>
	)
}

//creates a panel with a cetnered title and a table using a route, header, and array of objects with 
//a task and description
export function centerPanelWithTable(props){
	return(
		<div>
			<div className="panel panel-success">
            	<div className="panel-heading">
            		<a href={props.route}><center>{props.header}</center></a>
            	</div>
            	<div className="panel-body">
            		<table className="table table-striped table-bordered table-hover">
        				<tbody>
          				{/*iteams in table */}
          				{props.tableContents.map((tableObj, index) =>
            				<tr>
              					<td> {tableObj.task} </td>
              					<td> {tableObj.description} </td>
            				</tr>
            			)}
        				</tbody>
      				</table>
            	</div>
        	</div>
        </div>
	)
}
//creates a center panel with rows using an object with a route, header and array(body) that 
//holds row objects with tasks and descriptions
export function centerPanelWithRows(props){
	return(
		<div>
			<div className="panel panel-success">
            	<div className="panel-heading">
            		<a href={props.route}><center>{props.header}</center></a>
            	</div>
            	<div className="panel-body">
            		<div className="row">
            			{props.body.map((rowObj, index) => 
            				<div>
            					<div className="col-md-6">{rowObj.task}</div>
                        		<div className="col-md-6">{rowObj.description}</div>
                        		<br/>
                        		<br/>
                        	</div>
            			)}
            		</div>
            	</div>
        	</div>
        </div>
	)
}

//helper funciton to create a link using a url and text
function link(props){
	return(
		<li><a href={props.url}>{props.text}<br/></a></li>
	)
}

//creates a panel of links using a route, header, and array of links
export function linksPanel(props){
	return(
		<div className="panel panel-success">
            <div className="panel-heading"><a href={props.route}>{props.header}</a></div>
            <div className="panel-body">
            	<ul>
            		{props.linkList.map((linkObj, index) =>
              			link(linkObj)
          			)};
          		</ul>
            </div>
        </div>
		)
}

//creates multiple panels using an array of panel objects
export function createPanels(list){
	return (
		<div>
			<hr/>
          		{list.map((pan, index) =>
              		panel(pan)
          		)};
        </div>
	);
}

//creates multiple center panels using an array or panel objects
export function createCenterPanels(list){
	return (
		<div>
			<hr/>
          		{list.map((pan, index) =>
              		centerPanel(pan)
          		)};
        </div>
	);
}



