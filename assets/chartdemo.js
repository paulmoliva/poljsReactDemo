import { presidentialPoll, pollChart, senatePoll, senateChart, return_json } from './pol';

function displayGeorgia() {
  clearPoll();
  presidentialPoll('georgia');
  pollChart('georgia');
}
function displayNational() {
  clearPoll();
  presidentialPoll('national');
  pollChart('national');
}
function display4WayNational() {
  clearPoll();
  presidentialPoll('four-way-national');
  pollChart('four-way-national');
}

export function createButtons(){
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

  if (this.state.polls === 'president'){
  return prezStates.map ( el => {
    return (<li className="poll-button"
                onClick= {display(el)}>{el}
                         </li>);
  });
  }
}



export function display(state) {
  clearPoll();
  $('.sk-circle').removeClass('hidden');
  presidentialPoll(state);
  if(!$('.poll-container').length) presidentialPoll(state);
  if(!$('.poll-container').length) presidentialPoll(state);
  pollChart(state);
  if(!$('.poll-container').length) presidentialPoll(state);
  // if(!$('.canvas-container').length)pollChart(state);
  // setTimeout( ()=> {
  //   if(!$('#smiles').children().length)pollChart(state);
  // }, 4000 );
}

export function displaySenate(state){
  clearPoll();
  $('.sk-circle').removeClass('hidden');
  senatePoll(state);
  if(!$('.poll-container').length) senatePoll(state);
  if(!$('.poll-container').length) senatePoll(state);
  senateChart(state);
  if(!$('.poll-container').length) senatePoll(state);
}

function clearPoll() {
  $('#polls-root').empty();
  $('.canvas-container iframe').each( (i, el) => (el.remove()) );
  $('#canvas').remove(); // this is my <canvas> element
  $('.canvas-container').append('<canvas id="canvas" width="300" height="125"><canvas>');
  $('#smiles').empty();
  window.poll = undefined;
}
