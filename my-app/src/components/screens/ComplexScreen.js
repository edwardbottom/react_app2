import React, { Component } from 'react';
import {textGroup, textGroups, selectOption, 
	singleSelect, multipleSelect, textArea, 
	radioOption, radioForm, checkBox, button} from './objects/FormGroup';
import {createNavBar} from './objects/navbar';
import {headerAndDescription, header} from './objects/HeaderAndDescription';

//random data
let navBarObj = new Object();
navBarObj.titlePath = "/home";
let navItems = [];
let navone = new Object();
navone.id = "my_tasks_listener"
navone.path= "/home"
navone.action= "loadMyTasks();"
navone.description= "My Tasks";

let navtwo = new Object();
navtwo.id = "access_request_listener";
navtwo.path= "/accessrequest";
navtwo.description="Access Request";

let navthree = new Object();
navthree.id = "budget_request_listener";
navthree.path= "/budgetrequests";
navthree.description="Budget Request";

let navfour = new Object();
navfour.id = "contractor_management_listener";
navfour.path= "/contractormanagement";
navfour.description="Contractor Management";

let navfive = new Object();
navfive.id = "real_estate_listener";
navfive.path= "/realestate";
navfive.description="Real Estate"

let navseven = new Object();
navseven.id = "user_tools_listener";
navseven.path= "/usertools";
navseven.description="User Tools"

let naveight = new Object();
naveight.id = "voice_and_data_services_listener"
naveight.path= "/voiceanddataservices"
naveight.description="Voice and Data Services"

let navnine = new Object();
navnine.id= "logout"
navnine.path= "/"
navnine.description="Logout"

navItems.push(navone);
navItems.push(navtwo);
navItems.push(navthree);
navItems.push(navfour);
navItems.push(navfive);
navItems.push(navseven);
navItems.push(naveight);
navItems.push(navnine);

navBarObj.list = navItems;

let searchBar = new Object();
searchBar.router = "phpIsTheWorst";
searchBar.placeholder = "Search WSS System";

navBarObj.searchbar = searchBar;

var objArray = [];
var h = new Object();
h.type = "header";
h.header = "New Application Access Request Form";
objArray.push(h);

var t = new Object();
t.type = "text";
t.text = "Search Type:";
objArray.push(t);

var esso = new Object();
esso.label = "Human Request";
var radio = new Object;
radio.label = "Non-Human Request";
var rArray = [];
rArray.push(esso);
rArray.push(radio);
var something = new Object();
something.type = "radioForm";
something.inputArray = rArray;
something.align = "center";
objArray.push(something);

var textBoxes = [];
var textBox = new Object();
textBox.id = "last_name";
textBox.label = "Last Name";
textBox.type = "text";
textBox.placeholder = "Last Name";
textBox.size = "large";
textBoxes.push(textBox);
var oBox = new Object();
oBox.id = "first_name";
oBox.label = "First Name";
oBox.type = "text";
oBox.placeholder = "First Name";
oBox.size = "small";
textBoxes.push(oBox);
var aBox = new Object();
aBox.id = "sap_id";
aBox.label = "SAP ID";
aBox.type = "text";
aBox.placeholder = "SAP ID";
aBox.size = "small";
textBoxes.push(aBox);
var qBox = new Object();
qBox.id = "adid";
qBox.label = "ADID";
qBox.type = "text";
qBox.placeholder = "Use a comma for multiple ADID";
qBox.size = "medium";
textBoxes.push(qBox);


var ttt = new Object();
ttt.type = "textGroups";
ttt.inputArray = textBoxes
objArray.push(ttt);

var rButton = new Object();
rButton.id = "searchComplex";
rButton.text = "Search";
rButton.type = "button";
rButton.class = "btn btn-success";
rButton.align = "textAlign:'right'";
objArray.push(rButton);

var mObject = new Object();
mObject.type = "multipleSelects";
mObject.label = "Search Results";
var iArray = [];
var o12 = new Object();
o12.label = "A user from the database via the search";
iArray.push(o12);
iArray.push(o12);
iArray.push(o12);
iArray.push(o12);
mObject.inputArray = iArray;
objArray.push(mObject);

var check = new Object();
check.type = "check";
check.label = "Confirm Changes";
check.align = "center";
objArray.push(check);

var sButton = new Object();
sButton.type = "confirmButtons";
objArray.push(sButton);

//creates text from an object passed in
function text(props){
	return (
		<div>
			<strong><p> {props.text}</p></strong>
		</div>
	)
}
//creates a form using an array with form objects
function createComplexForm(props){
	if(props.length > 0){
        return(
        	<div>
            {/*iterates through the array*/}
      			{props.map(inputObj => {
        			if(inputObj.type === "header"){
        				if(inputObj.align == "left")
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
        			else if(inputObj.type == "textGroup"){
        				return (
          					<div>
          						{textGroup(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "textGroups"){
        				return (
          					<div>
          						{textGroups(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "singleSelect"){
        				return (
          					<div>
          						{singleSelect(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "multipleSelect"){
        				return (
          					<div>
          						{multipleSelect(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "multipleSelects"){
        				return(
        					<div class="form-inline">
        						{multipleSelect(inputObj)}
        						{multipleSelect(inputObj)}
        					</div>
        				)
        			}
        			else if(inputObj.type == "textArea"){
        				return (
          					<div>
          						{textArea(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "radioForm"){
        				return (
          					<div>
          						{radioForm(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "checkBox"){
        				return (
          					<div>
          						{checkBox(inputObj)}
          					</div>
          				)
        			}
        			else if(inputObj.type == "text"){
        				return(
        					<div>
        						{text(inputObj)}
        					</div>
        				)
        			}
        			else if(inputObj.type == "button"){
        				return(
        					<div>
        						{button(inputObj)}
        					</div>
        				)
        			}
        			else if(inputObj.type == "confirmButtons"){
        				return(
        					<div>
        						<div class="bottomButtons">
									<div class="row">
  										<div class="col-xs-5 col-xs-offset-9"><a href="/accessrequest" class="btn btn-success">Confirm</a></div><br/><br/>
  										<div class="col-xs-5 col-xs-offset-9"><a href="/accessrequest" class="btn btn-primary">Cancel</a></div>
									</div>
        						</div>
        					</div>
        				)
        			}
        			else if(inputObj.type == "check"){
        				return(
        					<div>
        						{checkBox(inputObj)}
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

//renders the access request screen
export default class ComplexScreen extends React.Component {
  render() {
    return (
      	<center>
          {createNavBar(navBarObj)}
          <div className="container">
            {createComplexForm(objArray)}
          </div>
        </center>
    );
  }
}



