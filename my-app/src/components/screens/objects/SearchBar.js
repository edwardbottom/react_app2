//imports react 
import React, { Component } from 'react';

//creates a search bar on the right side of the screen using an object with a router and placeholder
export function rightSearchBar(props){
  return(
    <form className="navbar-form navbar-right" action="/search">
      <div className="input-group">
        <input type="text" className="form-control" placeholder={props.placeholder}></input>
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit">
              <i className="glyphicon glyphicon-search"></i>
            </button>
          </div>
      </div>
    </form>
  )
}
