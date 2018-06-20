//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {panel, createPanels, centerPanel} from './objects/panel';
import {headerAndDescription, header} from './objects/HeaderAndDescription';
import {button, dropDownButton} from './objects/buttons';
import {rightSearchBar} from './objects/SearchBar';
import {table} from './objects/table';
import {createNavBar} from './objects/navbar';

//random data
let one = new Object();
one.route = "link";
one.header = "Revision to Furniture, Equipment, and Vehicle Budget Requests";
//one.body = "Used to add or delete a resource from the company or department budget.";
let two= new Object();
two.route = "link";
two.header = "Vehicle Change/Transfer Request"
//two.body = "Used to transfer a vehicle to a new driver and company or department"


let list = [];
list.push(one);
list.push(two);


let textObj = new Object();
textObj.header = "Budget Requests";
textObj.description = "This will contain the Budget Requests";

let headerObj = new Object();
headerObj.header = "Work Flows";




//renders the budget request screen
export default class BudgetRequestsScreen extends React.Component {
  //constructor and state intialization
  constructor(props) {
    super(props);
    this.state = {navData:this.props.navData,
      content:null,
    };
  };

  //state life cycle
  componentDidMount() {
      //axios.get(this.state.url)
      //.then(res => {
        //const content = res.data;
        //this.setState({ content });
      //})
  }

  render() {
    return (
      <div>
          {createNavBar(this.state.navData)}
          <div className="container">
            {headerAndDescription(textObj)}
            {createPanels(list)}
          </div>
      </div>
    );
  }
}


