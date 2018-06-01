//imports react 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export function header(props){
  return(
      <div>
        <h3>{props.header}</h3>
      </div>
    );
}

export function headerAndDescription(props){
	return(
      <div>
      	<h3>{props.header}</h3>
        <p>{props.description}</p>
      </div>
    );
}



