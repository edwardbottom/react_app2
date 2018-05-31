//imports react libraries and navbar
import React, { Component } from 'react';
import Navigation from './Navigation';
import {welcome} from './objects/panel';
import {panel} from './objects/panel';


let prop = {name: "React is amazing"};
const element = welcome(prop);
//class for the user tools screen 

let p = new Object();
p.route = "www";
p.header = "header";
p.body = "body";
const el = panel(p);

let list = [];
list.push(p);
list.push(p);
list.push(p);
list.push(p);
list.push(p);


class DynamicBody extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          {element}
          {el}
          <hr/>
          {list.map((pan, index) =>
            //<panel route={panel.route}
                   //header={panel.header}
                   //body={panel.body}/>
              panel(pan)
          )}
        </div>
      </div>
    );
  }
}

export default class DynamicScreen extends Component {

  render(){
    return(
      <div>
        <Navigation/>
        <DynamicBody/>
      </div>
    );
  }
}

