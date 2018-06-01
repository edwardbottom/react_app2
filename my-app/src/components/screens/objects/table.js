//imports react 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function header(props){
  return(
    <th scope="col">props.text</th>
  )
}

function tableData(props){
  return(
    <td>props.text</td>
  )
}
export function table(props){
	return(
    <div>
      <table className="table table-striped table-bordered table-hover">
        {/*table headers*/}
        <thead>
          <tr>
            <hr/>
              {props.header.map((headerObj, index) =>
                header(headerObj)
              )};
          </tr>
        </thead>
        <tbody>
          {/*iteam in table */}
          <hr/>
            {props.columns.map((tableCol, index) =>
              <tr>
                {tableCol.row.map((tableRow, index) =>
                  tableData(tableRow)
                )}
              </tr>
            )};
        </tbody>
      </table>
    </div>
    );
}



