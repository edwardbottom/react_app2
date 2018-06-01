//imports react 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export function welcome(props){
	return <h1>Hello, {props.name}</h1>;
}

export function panel(props){
	return(
      	<div className="panel panel-success">
        	<div className="panel-heading"><a href={props.route}>{props.header}</a></div>
        	<div className="panel-body">{props.body}</div>
        </div>
    );
}

export function centerPanel(props){
	return(
		<div className="panel panel-success">
            <div className="panel-heading"><a href={props.route}><center>{props.header}</center></a></div>
            <div className="panel-body">{props.body}</div>
        </div>
	)
}

function link(props){
	return(
		<li><a href={props.url}>{props.text}<br/></a></li>
	)
}
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

{/*export function createCenterPanelLarge(props){
	return(
		<div className="panel panel-success">
            <div className="panel-heading"><a href={props.route}><center>{props.header}</center></a></div>
            <div className="panel-body">
            	<div>
      				<table className="table table-striped table-bordered table-hover">
        			<tbody>
          				{/*iteam in table */}
          				{/*<hr/>
            				{props.columns.map((tableCol, index) =>
              				<tr>
                				{props.tableCol.row.map((tableRow, index) =>
                  					tableData(tableRow)
                			)}
              				</tr>
            			)};
        			</tbody>
      			</table>
    			</div>
            </div>
        </div>
	)
}*/}

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



