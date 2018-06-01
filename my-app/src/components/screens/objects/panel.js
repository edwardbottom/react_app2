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
		<a href={props.link}>{props.text}</a> 
	)
}
export function linksPanel(props){
	return(
		<div className="panel panel-success">
            <div className="panel-heading"><a href={props.route}>props.header}</a></div>
            <div className="panel-body">
            	{props.linkList.map((linkObj, index) =>
              		link(linkObj)
          		)};
            </div>
        </div>
		)
}

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


