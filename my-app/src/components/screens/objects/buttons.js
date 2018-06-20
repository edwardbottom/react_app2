//imports react 
import React, { Component } from 'react';

//takes in a json object with a target and text and renders a button
export function button(props){
	return(
    <div>
      <button type="button" className="btn btn-success" 
      data-toggle="modal" data-target= {props.target}> 
      {props.text} </button>
    </div>
    );
}

//renders a button as a link using an object with text and a target
export function buttonWithLink(props){
  return(
    <div>
      <a href={props.target} className="btn btn-success" role="button">{props.text}</a>
    </div>
    );
}

//a helper function used to render objects in a dropdown menu using a path and description
function dropDownIteam(props){
  return(
    <a className="dropdown-item" href={props.path}>{props.description}</a>
  );
}

//creates a dropdown button using an object with an id, description, and array or dropdown objects
export function dropDownButton(props){
  return(
    <div>
      <div className="dropdown">
        <button className="btn btn-success dropdown-toggle" type="button" id={props.id} data-toggle="dropdown">
          {props.description}
        <span class="caret"></span></button>
        <ul className="dropdown-menu">
            <li>
              {props.list.map((dropObj, index) =>
                  dropDownIteam(dropObj)
              )}
            </li>
        </ul>
      </div>
    </div>
    )
}

//creates a button that runs a function (handler) when clicked
export function buttonWithHandeler(props){
  return(
    <div>
      <button className="btn btn-success" onClick={props.handler}> {props.description} </button>
    </div>
    )
}

