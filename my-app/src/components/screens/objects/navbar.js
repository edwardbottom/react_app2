//imports react 
import React, { Component } from 'react';
import {rightSearchBar} from './SearchBar';

//a helper funciton that uses an id, path, and description to create an object in the navbar
function navIteam(props){
	return(
		<li><a id={props.id} href={props.path}>{props.description}</a></li>
	);
}

//render the navbar using an object with a  title path, a search bar object, and an array
export function createNavBar(props){
	return (
		<div id="navigation">
      	{/*navigation bar styling */}
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-left" href={props.titlePath}><img src="CTL Logo Reverse NA.png" 
              width="200" height="50" alt="CenturyLink Logo"></img></a>
            </div>
          {/*navigation bar links*/}
          <ul className="nav navbar-nav">
            {/*<hr/>*/}
				    {props.list.map((navObj, index) =>
    				  navIteam(navObj)
				    )}
          </ul>
        {/*search bar */}
        {rightSearchBar(props.searchbar)}
        </div>
      </nav>
    </div>
	);
}