import { presidentialPoll, pollChart, return_json } from './pol';

function displayGeorgia() {
  console.log('hi');
  clearPoll();
  presidentialPoll('georgia');
  pollChart('georgia');
}
function displayNational() {
  console.log('hi');
  clearPoll();
  presidentialPoll('national');
  pollChart('national');
}
function display4WayNational() {
  console.log('hi');
  clearPoll();
  presidentialPoll('four-way-national');
  pollChart('four-way-national');
}

export function createButtons(){
  console.log('in function');
  ['4-way-national',
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
  'Georgia'].forEach ( el => {
    $('.buttons').append(`<li class ="poll-button"
                             onclick= 'display("${el}")'>${el}
                         </li>`);
  });
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

function clearPoll() {
  $('#polls-root').empty();
  $('.canvas-container iframe').each( (i, el) => (el.remove()) );
  $('#canvas').remove(); // this is my <canvas> element
  $('.canvas-container').append('<canvas id="canvas" width="300" height="125"><canvas>');
  $('#smiles').empty();
  window.poll = undefined;
}
