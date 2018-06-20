//imports react 
import React, { Component } from 'react';
import {rightSearchBar} from './SearchBar';
import {table} from './table';


//todo: modify for more types of input and more json documentation
//takes in the parameters for an input value and returns an approiate form of input
export function input(props){
  if(props.hasOwnProperty("type") && props.hasOwnProperty("id") && props.hasOwnProperty("placeholder")){
    return(
      <div>
        <input type={props.type} id={props.id} placeholder={props.placeholder}></input><br/><br/>
      </div>
    );
  }
	else if(props.hasOwnProperty("type") && props.hasOwnProperty("id") && props.hasOwnProperty("class") && props.hasOwnProperty("value")){
    return(
      <div>
        <input type={props.type} id={props.id} className={props.placeholder} value={props.value}></input><br/><br/>
      </div>
    );
  }
  else if(props.hasOwnProperty("type") && props.hasOwnProperty("name") && props.hasOwnProperty("id")){
    return(
      <div class="radio">
        <label><input type={props.type} className={props.class} id={props.id}>Non-Human Request</input></label><br/><br/>
      </div>
    );
  }
}

//todo: make json file for this
//creates a bootstrap form group
export function formGroup(props){
  return (
    <div class="form-group">
      <label for="usr">{props.label}</label>
      <input type={props.type} className="form-control" id={props.id}></input>
    </div>
  )
}

//todo: make json file for this
//creates a button that routes to a certain page
export function buttonWithRoute(props){
  return (
    <a href={props.route}>
      <button type="button" className={props.class}>
        {props.label}
      </button>
    </a>
  )
}
//todo: make json file for this
//creates multiple form groups using an array
export function formGroups(props){
  return(
    <div>
      {props.inputArray.map((inputObj, index) =>
        formGroup(inputObj)
      )}
    </div>
  )
}

//todo: create json object file for this and comment
//creates a form with radio buttons using an array of radio button objects
export function radioForm(props){
  return (
   <form>
      <div id="radio_form" style="text-align:center">
        <strong><p>{props.title}</p></strong>
          <form>
            {props.inputArray.map((inputObj, index) =>
              input(inputObj)
            )}
          </form>
        </div>
    </form>
  )
}

//todo: document with json
//creates a form group in a column
export function formGroupColSize(props){
  return(
    <div className="form-group">
      <div className={props.colSize}>
        {props.inputArray.map((inputObj, index) =>
          <div>
            <label for={inputObj.id}>{inputObj.label}</label>
            <input type={inputObj.type} className={inputObj.className} id={inputObj.id} placeholder={inputObj.placeholder}></input>
          </div>
        )}
        <div>
          <button type="button" className="btn btn-success" id={props.buttonId}>{props.buttonLabel}</button>
        </div>
      </div>
    </div>
  )
}

//todo: make json object
//helper function to create a values for a table in a modal
function modalTableData(props){
  return(
    <tr>
      <td class="summary-heading">{props.name}</td>
      <td class="summary-content">{props.description}</td>
    </tr>
  )
}

//todo: make json object
//creates a table for a modal using the modalTableData function
export function modalTable(props){
  return(
    <div class={props.colSize}>
      <div class="panel panel-success">
      <div class="panel-heading">{props.table}</div>
        <div class="panel-body ">
          <table class="table table-condensed table-summary table-borderless ">
            <tbody>
              {props.inputArray.map((inputObj, index) =>
                modalTableData(inputObj)
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

//creates a link to summon a modal
export function modalLink(props){
  return(
    <a href={props.link} data-toggle="modal" data-target={props.target}>{props.text}</a>
    )
}

//creates a button to summon a modal
export function modalButton(props){
  return(
    <button type="button" class="btn btn-success btn-md" data-toggle="modal" data-target={props.target}>{props.text}</button>
    )
}

//creates a basic modal with no header or footer and a sumbit button
export function basicModal(props){
  function confirmHandler(){
    alert("Changes Saved");
  }
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
              </form>
              <button type="button" class="btn btn-success" data-dismiss="modal" onClick={confirmHandler}>Submit Changes</button>
              <p>     </p>
              <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}

//creates a modal with a header and a footer 
export function modelWithHeaderAndFooter(props){
  return(
    <div>
      <center>
        <div id= {props.id} className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal">&times;</button>
            <h4 className="modal-title">{props.title}</h4>
          </div>
          <div className="modal-body">
            <form>
              {props.inputArray.map((inputObj, index) =>
                input(inputObj)
              )}
            </form><br/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-success" data-dismiss="modal">Submit</button>
          </div>
        </div>
      </center>
    </div>
  )
}

//creates a large modal with a header and a footer
export function largeModal(props){
    return(
    <div>
      <center>
        <div id= {props.id} class="modal-content modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">{props.title}</h4>
            </div>
            <div className="modal-body">
              <form>
                {props.inputArray.map((inputObj, index) =>
                  input(inputObj)
                )}
              </form><br/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-success" data-dismiss="modal">Submit</button>
            </div>
          </div>
        </div>
      </center>
    </div>
  )
}

//creates a modal to display information with no header or footer and a sumbit button
export function infoModal(props){
  return(
    <center>
      <div id={props.id} class="modal fade modal-md" role="dialog">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">
              <p>{props.description}</p>
              <button type="button" class="btn btn-success btn-sm" data-dismiss="modal">Approve</button>
              <p>     </p>
              <button type="button" class="btn btn-danger .btn-sm" data-dismiss="modal">Reject</button>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
}
