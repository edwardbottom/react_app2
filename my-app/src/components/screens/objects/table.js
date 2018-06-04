//imports react 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//creates a header using an object with text
function header(props){
  return(
    <th scope="col">{props.text}</th>
  )
}

//creates a single data entry in the table using a text instance vairable
function tableData(props){
  return(
    <td>{props.text}</td>
  )
}

//creates a table using a header object and an array of rowObjects with a task and a description
export function table(props){
	return(
    <div>
      <table className="table table-striped table-bordered table-hover">
        {/*table headers*/}
        <thead>
          <tr>
              {props.header.map((headerObj, index) =>
                header(headerObj)
              )}
          </tr>
        </thead>
        <tbody>
          {/*iteams in table */}
          {props.body.map((rowObj, index) =>
            <tr>
              <td> {rowObj.task} </td>
              <td> {rowObj.description} </td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
    );
}

//takes in an array or row objects with a task and a description
export function tableWithoutHeader(props){
  return(
    <div>
      <table className="table table-striped table-bordered table-hover">
        <tbody>
          {/*iteams in table */}
          {props.tableContents.map((rowObj, index) =>
            <tr>
              <td> {rowObj.task} </td>
              <td> {rowObj.description} </td>
            </tr>
            )}
        </tbody>
      </table>
    </div>
    );
}



