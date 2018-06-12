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
  state = {
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

//runs the get requests
componentWillMount() {
    //request for modal object
    axios.get('http://localhost:3004/modal')
      .then(res => {
        const modalObj = res.data;
        this.setState({ modalObj: modalObj });
      })
    //request for multiple panels
    axios.get(`http://localhost:3004/CreatePanels`)
      .then(res => {
        const comments = res.data;
        this.setState({ comments });
      })
    //request for multiple panels
    axios.get('http://localhost:3004/CreatePanels')
      .then(res => {
        const others = res.data;
        this.setState({ others });
      })
    //request for a header object
    axios.get('http://localhost:3004/header')
      .then(res => {
        const headerObj = res.data.headerObj;
        this.setState({ headerObj });
      })
    //request for a modal button
    axios.get('http://localhost:3004/modalButton')
      .then(res => {
        const modalButtonObj = res.data;
        this.setState({ modalButtonObj });
      })
    //request for a ehader and description object
    axios.get('http://localhost:3004/headerAndDescription')
      .then(res => {
        const headerAndDescription = res.data;
        this.setState({ headerAndDescription })
      })
      //request for a centered panel
     axios.get('http://localhost:3004/panel')
      .then(res => {
        const centerPanel = res.data;
        this.setState({ centerPanel })
      })
      //request for a table
      axios.get('http://localhost:3004/table')
        .then(res => {
          const tableObj = res.data;
          this.setState({ tableObj })
        })
      //request for a panel with links
      axios.get('http://localhost:3004/linksPanel')
        .then(res => {
          const linksPanelObj = res.data;
          this.setState({ linksPanelObj })
        })
      //request for a centered panel with rows
      axios.get("http://localhost:3004/CenterPanelWithRows")
        .then(res => {
          const centerPanelWithRowsObj = res.data;
          this.setState({ centerPanelWithRowsObj })
        })
      //request for a collapsed panel
      axios.get("http://localhost:3004/collapsePanel")
        .then(res => {
          const collapsePanelObj = res.data;
          this.setState({ collapsePanelObj })
        })
      //request for a navbar object
      axios.get("http://localhost:3004/navBarObj")
        .then(res => {
          const navBarObj = res.data;
          this.setState({ navBarObj })
        })
      //example post request, delete later
      axios.post("http://localhost:3004/pancakes", "pancakes")
  }

  render() {
    return (
      <div>
          {/*creates the navbar */}
          {this.state && this.state.navBarObj && this.state.navBarObj.list && 
            this.state.navBarObj.titlePath && <div> {createNavBar(this.state.navBarObj)} </div>}
          <div className="container">
            <div id="Contractor_Management_Screen">
              <div className="container">
                {/*creates the header object */}
                {header(this.state.headerObj)}
                {/*creates a panel with links*/}
                {this.state && this.state.linksPanelObj && this.state.linksPanelObj.linkList
                  && <div> {linksPanel(this.state.linksPanelObj)} </div>}
                {/*creates the header and description */}
                {headerAndDescription(this.state.headerAndDescription)}
                {/*creates a button for a modal */}
                {modalButton(this.state.modalButtonObj)}
                <br/><br/>
                {/*creates multiple panels*/}
                {createPanels(this.state.comments)}
                {/*creates a panel with a collapsable dropdown */}
                {this.state && this.state.collapsePanelObj && this.state.collapsePanelObj.inputArray
                  && <div> {collapsePanel(this.state.collapsePanelObj)} </div>}
                {/*creates a panel with rows */}
                {this.state && this.state.centerPanelWithRowsObj && this.state.centerPanelWithRowsObj.body &&
                 <div> {centerPanelWithRows(this.state.centerPanelWithRowsObj)}</div>}
                {/*creates a centered panel*/}
                {centerPanel(this.state.centerPanel)}
                {/*creates a table object*/}
                {this.state && this.state.tableObj && this.state.tableObj.header &&
                  this.state.tableObj.body && <div> {table(this.state.tableObj)} </div>}
                {/*creates a basic modal*/}
                {this.state && this.state.modalObj && this.state.modalObj.inputArray
                 && <div> {basicModal(this.state.modalObj)} </div>}
              </div>
            </div>
          </div>
      </div>
    );
  }
}


