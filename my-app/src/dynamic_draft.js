
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





    //const modalObj = JSON.parse(localStorage)
    const navBarObj = JSON.parse(localStorage.getItem('navBarObj'));
    this.setState({navBarObj});
    const collapsePanelObj = JSON.parse(localStorage.getItem('collapsePanelObj'));
    this.setState({collapsePanelObj});
    const centerPanelWithRows = JSON.parse(localStorage.getItem('centerPanelWithRows'));
    this.setState({centerPanelWithRows});
    const linksPanel = JSON.parse(localStorage.getItem('linksPanel'));
    this.setState({linksPanel});
    const table = JSON.parse(localStorage.getItem('table'));
    this.setState({table});
    const panel = JSON.parse(localStorage.getItem('panel'));
    this.setState({panel});
    const headerAndDescription = JSON.parse(localStorage.getItem('headerAndDescription'));
    this.setState({headerAndDescription});
    const modalButtonObj = JSON.parse(localStorage.getItem('modalButtonObj'));
    this.setState({modalButtonObj});
    alert({this.state.modalButtonObj});
    const headerObj = JSON.parse(localStorage.getItem('headerObj'));
    this.setState({headerObj});
    console.log(this.state.headerObj);
    const others = JSON.parse(localStorage.getItem('others'));
    this.setState({others});
    const comments = JSON.parse(localStorage.getItem('comments'));
    this.setState({comments});
    const modalObj = JSON.parse(localStorage.getItem('modalObj'));
    this.setState({modalObj});



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
              {/*creates a panel with links*/}
                {this.state && this.state.linksPanelObj && this.state.linksPanelObj.linkList
                  && <div>{linksPanel(this.state.linksPanelObj)}</div>}
{/*creates the header and description */}
                {this.state && this.state.header && <div> {headerAndDescription(this.state.headerAndDescription)} </div>}
                {/*creates a button for a modal */}
                {this.state && this.state.modalButton && <div> {modalButton(this.state.modalButtonObj)} </div>}
                <br/><br/>
                {/*creates multiple panels*/}
                {this.state && this.state.createPanels && <div> {createPanels(this.state.comments)} <div>}
                {/*creates a panel with a collapsable dropdown */}
                {this.state && this.state.collapsePanelObj && this.state.collapsePanelObj.inputArray
                  && <div> {collapsePanel(this.state.collapsePanelObj)} </div>}
                {/*creates a panel with rows */}
                {this.state && this.state.centerPanelWithRowsObj && this.state.centerPanelWithRowsObj.body &&
                 <div> {centerPanelWithRows(this.state.centerPanelWithRowsObj)}</div>}
                {/*creates a centered panel*/}
                {this.state && this.state.centerPanel && <div>{centerPanel(this.state.centerPanel)}</div>}
                {/*creates a table object*/}
                {this.state && this.state.tableObj && this.state.tableObj.header &&
                  this.state.tableObj.body && <div>{table(this.state.tableObj)}</div>}
                {/*creates a basic modal*/}
                {this.state && this.state.modalObj && this.state.modalObj.inputArray
                 && <div>{basicModal(this.state.modalObj)}</div>}
              </div>
            </div>
          </div>
      </div>
    );
  }
}