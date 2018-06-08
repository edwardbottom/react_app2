//imports react 
import React, { Component } from 'react';

//todo: look into using the fetch api
//todo: document with a json object
export function request(props){
	var xmlhttp = new XMLHttpRequest();
    var url = props.url;
    var requestType = props.requestType;
	xmlhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            myHandler(myObj);
        }
      };
    xmlhttp.open(requestType, url, true);
    if(props.hasOwnProperty("args")){
    	xmlhttp.send("args");
    }
    else{
    	xmlhttp.send();
    }
    function myHandler(myObj) {
      alert(myObj.name + " was recieved");
      return myObj;
    }
}

