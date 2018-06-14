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

//renders a screen that will not be used in the ui, but is used during development 
//to test react features
export default class DynamicBodyScreen extends React.Component {
  //creats states of the class
  constructor(){
    super();
    this.state = {
      comments:[],
      others:[],
      headerObj:"",
      modalButtonObj:"",
      modalObj:"",
      headerAndDescription:"",
      centerPanel:"",
      tableObj:"",
      linksPanelObj:"",
      centerPanelWithRowsObj:"",
      collapsePanelObj:"",
      navBarObj:""
    }
  }


//sets intial states
componentDidMount() {
    localStorage.clear();
   // if(localStorage.getItem('navBarObj') === null || localStorage.getItem('modalObj') === null){
      //request for modal object
      axios.get('http://localhost:3004/modal')
        .then(res => {
          const modalObj = res.data;
          localStorage.setItem('modalObj', modalObj);
        })
      //request for multiple panels
      axios.get(`http://localhost:3004/CreatePanels`)
        .then(res => {
          const comments = res.data;
          localStorage.setItem('comments', comments);
        })
      //request for multiple panels
      axios.get('http://localhost:3004/CreatePanels')
        .then(res => {
          const others = res.data;
          localStorage.setItem('others', others);
        })
      //request for a header object
      axios.get('http://localhost:3004/header')
        .then(res => {
          const headerObj = res.data.headerObj;
          localStorage.setItem('headerObj',  JSON.stringify(headerObj));
        })
      //request for a modal button
      axios.get('http://localhost:3004/modalButton')
        .then(res => {
          const modalButtonObj = res.data;
          localStorage.setItem('modalButtonObj', modalButtonObj);
        })
      //request for a ehader and description object
      axios.get('http://localhost:3004/headerAndDescription')
        .then(res => {
          const headerAndDescription = res.data;
          localStorage.setItem('headerAndDescription', headerAndDescription);
        })
        //request for a centered panel
      axios.get('http://localhost:3004/panel')
        .then(res => {
          const centerPanel = res.data;
          localStorage.setItem('centerPanel', centerPanel);
        })
      //request for a panel with links
      axios.get('http://localhost:3004/linksPanel')
        .then(res => {
          const linksPanelObj = res.data;
          localStorage.setItem('linksPanelObj', linksPanelObj);
        })
      //request for a centered panel with rows
      axios.get("http://localhost:3004/CenterPanelWithRows")
        .then(res => {
          const centerPanelWithRowsObj = res.data;
          localStorage.setItem('centerPanelWithRows', centerPanelWithRows);
        })
      //request for a collapsed panel
      axios.get("http://localhost:3004/collapsePanel")
        .then(res => {
          const collapsePanelObj = res.data;
          localStorage.setItem('collapsePanelObj', collapsePanelObj);
        })
      //request for a navbar object
      axios.get("http://localhost:3004/navBarObj")
        .then(res => {
          const navBarObj = res.data;
          localStorage.setItem('navBarObj', JSON.stringify(navBarObj));
          //const obj = JSON.parse(localStorage.getItem('navBarObj'));
          //this.setState({ navBarObj:obj})
        })
      //request for a table
      axios.get('http://localhost:3004/table')
        .then(res => {
          const tableObj = res.data;
          localStorage.setItem('tableObj', JSON.stringify(tableObj));
        })
      //example post request, delete later
      //axios.post("http://localhost:3004/pancakes", "pancakes")

       //const modalObj = JSON.parse(localStorage
    const navBarObj = JSON.parse(localStorage.getItem('navBarObj'));
    this.setState({navBarObj});
    //}
    const headerObj = JSON.parse(localStorage.getItem('headerObj'));
    this.setState({headerObj})
    

}

  render() {
    return (
      <div>
          {/*creates the navbar */}
          {this.state && this.state.navBarObj && this.state.navBarObj.list && 
            this.state.navBarObj.titlePath && <div> {createNavBar(this.state.navBarObj)} </div>}
          <div className="container">
            <div id="Dynamic_Screen">
              <div className="container">
                {/*creates the header and description */}
                {this.state && this.state.headerObj && <div> {header(this.state.headerObj)} </div>}
              </div>
            </div>
          </div>
      </div>
    );
  }
}


