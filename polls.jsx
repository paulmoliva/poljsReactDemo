import React from 'react';

import { display } from './assets/chartdemo.js';

function return_json(obj){
  var pollingData;
  pollingData = obj;
}

class Polls extends React.Component{
  constructor(props){
    super(props);
    // your code will be here
  }

  componentDidMount(){
    display('four-way-national');
  }

  createButtons(){
    const states = [
    'National',
    'Four-Way-National',
    'Pennsylvania',
    'Wisconsin',
    'Iowa',
    'Michigan',
    'Virginia',
    'New Hampshire',
    'Missouri',
    'Colorado',
    'Nevada',
    'Arizona',
    'Florida',
    'Ohio',
    'North Carolina',
    'Georgia'];
    let stateLis = states.map ( el => {
      return (<li id={el}
                   className ="poll-button"
                   onClick= {(e) => display($(e.target).attr('id'))}
               >
               {el}
               </li>);
    });
    return (
      <ul className='buttons'>
        {stateLis}
      </ul>
    );
  }

  render(){
    return (
      <div>
        <div className='container'>
          <div className="sk-circle hidden">
            <img src="./assets/loading5.gif" alt="" />
          </div>
          <div className="polls" id="polls-root">
          </div>
          <div className="canvas-container">
            <canvas id="canvas" width="300" height="125"></canvas>
          </div>
        </div>
        {this.createButtons()}
        <div id='smiles'></div>
      </div>
    );
  }
}

export default Polls;
