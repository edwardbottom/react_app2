//imports react 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//creates a header using an object with a header
export function header(props){
  return(
      <div>
        <h3>{props.header}</h3>
      </div>
    );
}

//creates a header and description using an object with a header and description
export function headerAndDescription(props){
	return(
      <div>
      	<h3>{props.header}</h3>
        <p>{props.description}</p>
      </div>
    );
}



