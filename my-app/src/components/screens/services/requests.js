//imports react 
import React, { Component } from 'react';
import axios from 'axios';

//makes a generic request using xmlhttp, good for testing, not ideal for implementation
export function request(props){
	var myObj = false;
	var xmlhttp = new XMLHttpRequest();
    var url = props.url;
    var requestType = props.requestType;
	xmlhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            alert(myObj + " is the object in the function");
            alert(myObj.name + " is the in the function");
            return alert(myObj);
        }
      };
    xmlhttp.open(requestType, url, true);
    if(props.hasOwnProperty("args")){
    	xmlhttp.send("args");
    }
    else{
    	xmlhttp.send();
    }
}


export function get(url){
	return axios.get(url)
}

export function post(props){
	return axios.post(props.url, props.parameters);
}

export function processRequest(classObj, promise, stateSet){
	promise.then(res => {
          stateSet = res.data;
          alert(stateSet.headerObj.header);
          classObj.setState( stateSet )
          alert(classObj.state.stateSet)
        })  
}

//makes a post request using an object, the state of the object, the url and the
// parameters of the request
// export function post(object, state, url, parameters){
// 	axios.post(user, { parameters })
//       .then(res => {
//         state = res.data;
//         object.setState{ state }
//       })
// }
