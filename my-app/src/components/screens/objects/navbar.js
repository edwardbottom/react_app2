//imports react 
import React, { Component } from 'react';
import {rightSearchBar} from './SearchBar';

function navIteam(props){
	return(
		<li><a id={props.id} href={props.path}>{props.description}</a></li>
	);
}
export function createNavBar(props){
	return (
		<div id="navigation">
      	{/*navigation bar styling */}
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href={props.titlePath}><strong>WSS</strong> By CenturyLink</a>
            </div>
          {/*navigation bar links*/}
          <ul className="nav navbar-nav">
            <hr/>
				{props.list.map((navObj, index) =>
    				navIteam(navObj)
				)};
          </ul>
        {/*search bar */}
        {rightSearchBar(props.searchbar)}
        </div>
      </nav>
    </div>
	);
}