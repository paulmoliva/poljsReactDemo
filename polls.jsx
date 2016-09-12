import React from 'react';
import Masonry from 'react-masonry-component';
import { display, displaySenate } from './assets/chartdemo.js';

function return_json(obj){
  var pollingData;
  pollingData = obj;
}

class Polls extends React.Component{
  constructor(props){
    super(props);
    this.state = {polls: 'president'};
    // your code will be here
  }


  componentDidMount(){
    display('four-way-national');
  }

  createButtons(){
    const prezStates = ['4-way-national',
    '2-way-national',
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
    const senateStates =
         ['Colorado',
         'Wisconsin',
         'Florida',
         'Indiana',
         'Pennsylvania',
         'Nevada',
         'North Carolina'];
    if (this.state.polls === 'president'){
      let stateLis = prezStates.map ( el => {
        return (<li id={el}
                     className ="poll-button"
                     onClick= {(e) => display($(e.target).attr('id'))}
                 >
                 {el}
                 </li>);
      });
      return stateLis;
    } else if (this.state.polls === 'senate'){
      let stateLis = senateStates.map ( el => {
        return (<li id={el}
                     className ="poll-button"
                     onClick= {(e) => displaySenate($(e.target).attr('id'))}
                 >
                 {el}
                 </li>);
      });
      return stateLis;
    }
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
        <Masonry className='buttons'
                 elementType={'ul'}
                 options= {{transitionDuration: '0.94s',
                            columnWidth: 200,
                          itemSelector: '.poll-button'}}>
          {this.createButtons()}
        </Masonry>
        <button onClick={()=> this.setState({polls: 'senate'})}>Change</button>
        <div id='smiles'></div>
      </div>
    );
  }
}

export default Polls;
