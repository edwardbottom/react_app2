//imports react 
import React, { Component } from 'react';

//todo: modify for more types of input
//takes in the parameters for an input value and returns an approiate form of input
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

