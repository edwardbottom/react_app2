//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel, linksPanel, createCenterPanels, centerPanelWithRows, centerPanelWithTable, collapsePanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton, buttonWithLink} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';
import axios from 'axios';
import {modalButton, basicModal} from './objects/forms';
import {get, post, processRequest} from './services/requests';
import {textGroup, textGroups, textArea, singleSelect, multipleSelect, radioForm, checkBox} from './objects/FormGroup';

//creates a screen using an array of component objects
function createScreen(props){
  if(props.length > 0){
        return(
          <div>
            {props.map(inputObj => {
              if(inputObj.type === "header"){
                  return (
                    <div>
                      {header(inputObj)}
                      <br/>
                    </div>
                )
                }
                else if(inputObj.type == "headerAndDescription"){
                  return (
                    <div>
                      {headerAndDescription(inputObj)}
                    </div>
                  ) 
                }
                else if(inputObj.type == "linksPanel"){
                  return(
                    <div>
                      {linksPanel(inputObj)}
                    </div>
                  )
                }
                else if(inputObj.type =="createPanels"){
                  return(
                    <div>
                      {createPanels(inputObj.list)}
                    </div>
                  )
                }
              return null
            })}
         </div>
        )
      }
  else{
    return (
      <p> Not a valid props </p>
    )
  }     
}
export default class DynamicBodyScreen extends React.Component {
  //constructor and state intialization
  constructor(props) {
    super(props);
    console.log(this.props.navData);
    this.state = {nav:this.props.navData,
      content:null,
      //url:this.props.url
      url:"http://localhost:3004/voiceanddataservices"
    };
  };

  //state life cycle
  componentDidMount() {
      axios.get(this.state.url)
      .then(res => {
        const content = res.data;
        this.setState({ content });
      })
  }
  //renders the html
  render() {
    return (
      <div>
        {createNavBar(this.state.nav)}
          {<div className="container">
            {this.state.content && this.state.content.length && <div> {createScreen(this.state.content)} </div>}
          </div>}
      </div>
    );
  }
}


