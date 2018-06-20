//imports react 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {table, tableWithoutHeader} from 'table';


//hello world function
export function welcome(props){
	return <h1>Hello, {props.name}</h1>;
}

//todo: modify for more types of input
//takes in input objects and creates a specified input form based off the values of the object
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

//creates a panel using an object with a route, header, and body
export function panel(props){
  if(props.hasOwnProperty("target")){
    if(props.hasOwnProperty("body")){
      return(
        <div>
          <div className="panel panel-success">
            {/*modal panel*/}
            <div className="panel-heading">
              <a href={props.route} data-toggle="modal" data-target={props.target}>
                <strong>{props.header}</strong>
              </a>
              <span class="glyphicon glyphicon-question-sign" data-toggle="modal" data-target={"#"+props.target+"-modal"}></span>
            </div>
          </div>
          {/*Modal*/}
          <div class="modal fade" id={props.target+"-modal"} role="dialog">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <p>{props.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
      }
      else{
        return(
          <div className="panel panel-success">
            {/*modal panel*/}
            <div className="panel-heading">
              <a href={props.route} data-toggle="modal" data-target={props.target}>
                <strong>{props.header}</strong>
              </a>
            </div>
          </div>
        )
      } 
    }
    else{
      if(props.hasOwnProperty("body")){
        return(
          <div>
            <div className="panel panel-success">
              {/*link panel*/}
              <div className="panel-heading">
                <a href={props.route}>
                  <strong>{props.header}</strong>
                </a>
                <span class="glyphicon glyphicon-question-sign" data-toggle="modal" data-target={"#"+props.route+"-modal"}></span>
              </div>
            </div>
            {/*Modal*/}
            <div class="modal fade" id={props.route+"-modal"} role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-body">
                    <p>{props.body}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      else{
        return(
          <div className="panel panel-success">
            {/*link panel*/}
            <div className="panel-heading">
              <a href={props.route}>
                <strong>{props.header}</strong>
              </a>
            </div>
          </div>
        )
      }
    }
  }    

//creates a panel with a centered header using an object with a route, header and body
export function centerPanel(props){
	return(
		<div className="panel panel-success">
      <div className="panel-heading"><a href={props.route}><strong><center>{props.header}</center></strong></a>
        <span class="glyphicon glyphicon-question-sign"></span>
      </div>
      {<div className="panel-body">{props.body}</div>}
    </div>
	)
}

//creates a collapisble panel using an object with a route, header, targer, description, 
//and array of input objects
export function collapsePanel(props){
  function submitChanges(){
    alert("Changes Saved");
  }
  return(
    <div className="panel panel-success">
    <div className="panel-heading"><a href={props.route}><strong>{props.header}</strong></a></div>
      <div className="panel-body">
        <a data-toggle="collapse" data-target={props.target}>{props.description}</a>
        <br/>
        <br/>
        <div id={props.id} className="collapse">
          <form>
            {props.inputArray.map((inputObj, index) =>
              input(inputObj)
            )}
          </form><br/>
          <button type="button" class="btn btn-primary" data-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-success" data-dismiss="modal" onClick={submitChanges}>Submit</button>
        </div>
      </div>
    </div>
  )
}

//creates a panel with a cetnered title and a table using a route, header, and array of objects with 
//a task and description
export function centerPanelWithTable(props){
	return(
		<div>
			<div className="panel panel-success">
        <div className="panel-heading">
          <a href={props.route}><center><strong>{props.header}</strong></center></a>
        </div>
        <div className="panel-body">
          <table className="table table-striped table-bordered table-hover">
        		<tbody>
          		{/*iteams in table */}
          		{props.tableContents.map((tableObj, index) =>
            	  <tr>
              		<td> {tableObj.task} </td>
              		<td> {tableObj.description} </td>
            		</tr>
            	)}
        		</tbody>
      		</table>
        </div>
      </div>
    </div>
	)
}
//creates a center panel with rows using an object with a route, header and array(body) that 
//holds row objects with tasks and descriptions
export function centerPanelWithRows(props){
	return(
		<div>
			<div className="panel panel-success">
        <div className="panel-heading">
          <a href={props.route}><center><strong>{props.header}</strong></center></a>
        </div>
        <div className="panel-body">
          <div className="row">
            {props.body.map((rowObj, index) => 
            	<div>
            		<div className="col-md-6">{rowObj.task}</div>
                  <div className="col-md-6">{rowObj.description}</div>
                    <br/>
                    <br/>
                  </div>
            		)}
            	</div>
            </div>
        	</div>
        </div>
	     )
      }

//helper function to create a link using a url and text
function link(props){
	return(
		<li><a href={props.url}>{props.text}<br/></a></li>
	)
}

//creates a panel of links using a route, header, and array of links
export function linksPanel(props){
	return(
		<div className="panel panel-success">
      <div className="panel-heading"><a href={props.route}><strong>{props.header}</strong></a></div>
      <div className="panel-body">
        <ul>
          {props.linkList.map((linkObj, index) =>
            link(linkObj)
          )}
        </ul>
      </div>
    </div>
	)
}

//creates multiple panels using an array of panel objects and the panel function
export function createPanels(list){
	return (
		<div>
      {list.map((pan, index) =>
        panel(pan)
      )}
    </div>
	);
}

//creates multiple center panels using an array or panel objects
export function createCenterPanels(list){
	return (
		<div>
			<hr/>
      {list.map((pan, index) =>
        centerPanel(pan)
      )}
    </div>
	);
}



