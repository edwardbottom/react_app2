//imports react 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//class for creating a single panel
// class Panel extends React.Component {
//   render(){
//     return(
//       	<div className="panel panel-success">
//         	<div className="panel-heading"><a href={props.route}>{props.header}</a></div>
//         	<div className="panel-body">{props.body}</div>
//         </div>
//     );
//   }
// }

export function welcome(props){
	return <h1>Hello, {props.name}</h1>;
}

export function panel(props){
	return(
      	<div className="panel panel-success">
        	<div className="panel-heading"><a href={props.route}>{props.header}</a></div>
        	<div className="panel-body">{props.body}</div>
        </div>
    );
}

export function createPanels(list){
	render(){
		return (
			<div>
			<hr/>
          		{list.map((pan, index) =>
              		panel(pan)
          		)}
          	</div>
		);
	};
}
