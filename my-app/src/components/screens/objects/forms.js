//imports react 
import React, { Component } from 'react';

//todo: modify for more types of input
export function input(props){
  if(props.hasOwnProperty("type") && props.hasOwnProperty("id") && props.hasOwnProperty("placeholder")){
    return(
      <div>
        <input type={props.type} id={props.id} placeholder={props.placeholder}></input>
      </div>
    );
  }
	else if(props.hasOwnProperty("type") && props.hasOwnProperty("id") && props.hasOwnProperty("class") && props.hasOwnProperty("value")){
    return(
      <div>
        <input type={props.type} id={props.id} className={props.placeholder} value={props.value}></input>
      </div>
    );
  }
}

//creates a link for a modal
export function modalButton(props){
  return(
    <a href={props.link} data-toggle="modal" data-target={props.target}>{props.text}</a>
    )
}
//creates a basic modal with no header or footer and a sumbit button
export function basicModal(props){
  return(
    <center>
    <div id={props.id} class="modal fade modal-md" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-body">
          <h4 class="modal-title">{props.header}</h4><br/>
            <form>
              {props.inputArray.map((inputObj, index) =>
                input(inputObj)
              )}
            </form><br/>
            <button type="button" class="btn btn-success" data-dismiss="modal">Submit</button>
        </div>
    </div>
  </div>
</div>
</center>
    );
}

