//imports react 
import React, { Component } from 'react';

export function rightSearchBar(props){
  return(
    <form className="navbar-form navbar-right" action={props.router}>
      <div className="input-group">
        <input type="text" class="form-control" placeholder={props.placeholder}></input>
          <div className="input-group-btn">
            <button className="btn btn-default" type="submit">
              <i className="glyphicon glyphicon-search"></i>
            </button>
          </div>
      </div>
    </form>
  )
}
