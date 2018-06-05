//todo: create json files for sample pills objects

//imports react 
import React, { Component } from 'react';

//creates a pill for a single search result using an object with a link and a title
function createPill(props){
	return(
		<li class="active"><a href={props.link}>{props.title}</a></li>
	);
}

export function createPills(props){
	return(
		<div>
		<style>
		{"\
			.red .active a,\
			.red .active a:hover {\
    			background-color: green;\
			}\
		"}
		</style>
			<ul class="nav nav-pills nav-stacked">
  				{props.list.map((searchObj, index) =>
                  createPill(searchObj)
              	)}
			</ul>
		</div>
	);
}