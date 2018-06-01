//imports react 
import React, { Component } from 'react';

export function button(props){
	return(
    <div>
      <button type="button" className="btn btn-success" 
      data-toggle="modal" data-target= {props.target}> 
      {props.text} </button>
    </div>
    );
}

function dropDownIteam(props){
  return(
    <a className="dropdown-item" href={props.path}>{props.description}</a>
  );
}
export function dropDownButton(props){
  return(
    <div>
      <div className="dropdown">
        <button className="btn btn-success dropdown-toggle" type="button" id={props.id} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {props.description}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <hr/>
              {props.list.map((dropObj, index) =>
                  dropDownIteam(dropObj)
              )};
        </div>
      </div>
    </div>
    )
}

