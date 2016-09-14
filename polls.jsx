import React from 'react';
import Masonry from 'react-masonry-component';
import Modal from 'react-modal';
import { display, displaySenate } from './assets/chartdemo.js';

function return_json(obj){
  var pollingData;
  pollingData = obj;
}

class Polls extends React.Component{
  constructor(props){
    super(props);
    this.state = {polls: 'president', modalIsOpen: true};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  componentDidMount(){
    //display('four-way-national');
  }

  createButtons(){
    const prezStates =
    ['Four-way-national',
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
    // 'Indiana',
     'Pennsylvania',
     'Nevada',
     'North Carolina',
     'New Hampshire',
     'Missouri',
     'Ohio',
     'Iowa',
     'Arizona',
     'California',
     'New York'
     ];
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

  openModal() {
    this.setState({modalIsOpen: true});
}

closeModal() {
  this.setState({modalIsOpen: false});
}

componentDidUpdate(){
  $('.poll-button').first().click();
}

  render(){
    Modal.setAppElement(appElement);

    var appElement = document.getElementById('main');
    Modal.setAppElement(appElement);
    const customStyles = {
      content : {
        margin: '20px auto',
        width: '50%'
      }
    };
    return (
      <div>
        <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles} >

          <h1>Pol.js React Demo<a href="https://github.com/paulmoliva/Pol.js"><img className="logo" src="http://www.pauloliva.com/assets/poljslogo.png"></img></a></h1>
          <p>This demo will showcase the functionality of Pol.js, an open source JavaScript library created by Paul Oliva.</p>
          <p>Usage is simple. For presidential polls, select 'Presidential Battlegrounds' from the dropdown and choose the poll data you would like to view.</p>
          <p>For senate polls, select 'Senate Battlegrounds' from the dropdown and choose the poll data you would like to view.</p>
          <p>For each poll selection, Pol.js makes an AJAX request with a JSONP callback to RealClearPolitics to fetch the data. As RCP does not have a formal API for polling data, but their data is open to the public, the methods Pol.js provides to retrieve data are sometimes referred to as a "synthetic API".</p>
          <button onClick={this.closeModal}>
            close</button>
        </Modal>
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
        <div className='button-container'>
          <select onChange={(e) => {
              this.setState({polls: $(e.currentTarget).val()});

            }}>
            <option value='president'>Presidential Battlegrounds</option>
            <option value='senate'>Senate Battlegrounds</option>
          </select>
          <Masonry className='buttons'
            elementType={'ul'}
            options= {{transitionDuration: '0.94s',
              gutter: 5,
              itemSelector: '.poll-button'}}>
              {this.createButtons()}
            </Masonry>
            <div className='status'></div>
        </div>
        <footer>
          <a href="https://github.com/paulmoliva/">My Github</a>
          <a href="http://pauloliva.com">My Portfolio</a>
        </footer>
        <a href="https://github.com/paulmoliva/Pol.js"><img className='corner' src="http://www.pauloliva.com/assets/poljslogo.png"></img></a>
        <div id='smiles'></div>
      </div>
    );
  }
}

export default Polls;
