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
    $('tspan:contains(.com)').remove();
    window.display = display;
    window.displaySenate = displaySenate;
    window.detectDisplay = (type, state) => {
      if (type === "president") displaySenate(state);
      else display(state);
    };
  }

  createButtons(){
    const prezStates =
    ['Four-way-national',
    '2-way-national',
    ];
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
     'California'
     ];
    if (this.state.polls === 'president'){
      let stateLis = prezStates.map ( el => {
        return (<li id={el}
                     className ="pres-poll-button"
                     onClick= {(e) => display($(e.target).attr('id'))}
                 >
                 {el}
                 </li>);
      });
      return stateLis;
    } else if (this.state.polls === 'senate'){
      let stateLis = senateStates.map ( el => {
        return (<li id={el}
                     className ="pres-poll-button"
                     onClick= {(e) => displaySenate($(e.target).attr('id'))}
                 >
                 {el}
                 </li>);
      });
      return stateLis;
    }
  }

  makeColumn(){

    if (this.state.polls === 'president'){
      $('tspan:contains(.com)').remove();
      return (
        <div className='column'>

          <Masonry className='pres-buttons'
            elementType={'ul'}
            options= {{transitionDuration: '0.94s',
              gutter: 1,
              itemSelector: '.pres-poll-button'}}>
              {this.createButtons()}
            </Masonry>
            <div id="map"></div>
        </div>
      );
    } else {

        return (
          <div className='column'>

            <Masonry className='pres-buttons'
              elementType={'ul'}
              options= {{transitionDuration: '0.94s',
                gutter: 1,
                itemSelector: '.pres-poll-button'}}>
                {this.createButtons()}
              </Masonry>
              <div id="map" className='hidden'></div>

          </div>
        );
    }
  }

  openModal() {
    this.setState({modalIsOpen: true});
}

closeModal() {
  this.setState({modalIsOpen: false});
}

componentDidUpdate(){

  $('.pres-poll-button').first().click();
  $('.poll-button').first().click();
}

  render(){
    Modal.setAppElement(appElement);

    var appElement = document.getElementById('main');
    Modal.setAppElement(appElement);
    const customStyles = {
      content : {
        margin: '8% auto',
        width: '30%',
        padding: '15px 20px'
      }
    };
    return (
      <div>
        <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={customStyles} >

          <h1>Pol.js React Demo</h1>
          <p>This demo will showcase the functionality of Pol.js, an open source JavaScript library created by Paul Oliva.</p>
          <p>Usage is simple. For presidential polls, select 'Presidential Battlegrounds' from the dropdown and choose the poll data you would like to view.</p>
          <p>For senate polls, select 'Senate Battlegrounds' from the dropdown and choose the poll data you would like to view.</p>
          <p>For each poll selection, Pol.js makes an AJAX request with a JSONP callback to RealClearPolitics to fetch the data. As RCP does not have a formal API for polling data, but their data is open to the public, the methods Pol.js provides to retrieve data are sometimes referred to as a "synthetic API".</p>
          <button onClick={this.closeModal}>
            Close</button>
        </Modal>
        <div className='container'>
          <div className="column">
            <div className="sk-circle hidden">
              <img className="loader" src="./assets/loading5.gif" alt="" />
            </div>
            <div className="polls" id="polls-root">
            </div>
            <div className='status'></div>
          </div>
          <div className="canvas-container">
            <canvas id="canvas" width="300" height="125"></canvas>
          </div>
        </div>
        <div className='button-container'>
          <select onChange={(e) => {
              this.setState({polls: $(e.currentTarget).val()});
              window.displayType = this.state.polls;
              console.log(window.displayType);
            }}>
            <option value='president'>Presidential Battlegrounds</option>
            <option value='senate'>Senate Battlegrounds</option>
          </select>
          {this.makeColumn()}
          <div className="column">
            <h3>Created by Paul Oliva</h3>
            <div className='row'>
              <a href='http://github.com/paulmoliva'><img src='./assets/git.png' /></a>
              <a href='https://www.linkedin.com/in/paul-m-oliva-4a595b2a'><img src='./assets/linkedin.png' /></a>
            </div>
            <a href='http://pauloliva.com'><h4>My Portfolio</h4></a>
          </div>
        </div>

        <div id='smiles'></div>
      </div>
    );
  }
}

export default Polls;
