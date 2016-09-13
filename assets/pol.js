import Chart from './Chart';
let pollData = {};
let dates = [];
var count = 0;
function _make_request(pollID, callBack){
  function return_json(obj) {
    console.log(obj);
    pollData = obj;
  }

  const rcpURL = 'http://www.realclearpolitics.com/epolls/json/';
  const historical = '_historical.js';
  const requestURL = rcpURL + pollID + historical;
  $( () => {
    $('.status').text('Retrieving polling data...');
    $.ajax(
      {
        url: rcpURL + pollID.toString() + historical,
        dataType: 'jsonp',
        jsonpCallback: 'return_json',
        jsonp: false,
        success: (someData) => {
          if ($('.status').text()===('Retrieving polling data...'))
            $('.status').text('Polling data received...');
          callBack(someData);
        },
        error: (someData) => {
          callBack(pollData);
        }
      });
  });
}



function htmlDisplay(obj){
  let poll = obj.poll;
  if (!poll) poll = window.poll;
  if (!poll) return;
  else window.poll = poll;
  //_emptyTags();
  //$('.sk-circle').toggleClass('hidden');
  let $h3 = $('<h3></h3>');
  $h3.html(poll.title);
  const $root = $('#polls-root');
  $root.append(`<div class=poll-container id=poll${count}></div>`);
  let $pollDiv = $(`#poll${count}`);
  $pollDiv.prepend($h3);
  let data = poll.rcp_avg[0];
  let prevDay = poll.rcp_avg[1];
  let $h4 = $('<h4></h4>');
  let date = data.date.split(' ').slice(0,4).join(' ');
  $h4.html(date);
  $pollDiv.append($h4);
  let candidates = data.candidate;
  let prevCandidates = prevDay.candidate;
  for (let i = 0; i < candidates.length; i++){
    let color;
    if (candidates[i].affiliation === "Democrat"){
      color = 'blue';
    } else if (candidates[i].affiliation === "Republican"){
      color = 'red';
    } else if (candidates[i].affiliation === "Green"){
      color = 'green';
    } else if (candidates[i].affiliation === "Libertarian"){
      color = 'yellow';
    }
    let value = candidates[i].value;
    let prevValue = prevCandidates[i].value;
    if (value === prevValue){
      var arrowText = '';
    } else if (value > prevValue){
      var arrowText = `<span style = "color: green; font-size: 14px">▲${Math.round((value - prevValue) * 10) / 10}</span>`;
    } else {
      var arrowText = `<span style = "color: red; font-size: 14px">▼${Math.round((value - prevValue) * 10) / 10}</span>`;
    }    $pollDiv.append(`<div class = 'candidate-name' id = poll-${count}-candidate${i}-name></div>`);
    $pollDiv.append(`<div class = 'candidate-value' id = poll-${count}-candidate${i}-value></div>`);
    $(`#poll-${count}-candidate${i}-name`)[0].innerHTML = '<strong>' + (candidates[i].name) + '<strong>';
    $(`#poll-${count}-candidate${i}-value`)[0].innerHTML = (candidates[i].value + '%' + arrowText);
    let el = $(`#poll-${count}-candidate${i}-value`)[0];
   $(el).css({'width': '1px', 'font-size': '1px', 'overflow-x':'visible', 'border-bottom': 'solid 1px', 'border-bottom-color': `${color}`});
    $(el).animate({
      width: `${candidates[i].value * 1.75}%`,
      'border-bottom-width': '20px',
      fontSize: '14px'
    }, 1200);
  }
  count ++;
  if($('.poll-container').length > 1) $('.poll-container').last().remove();
}

function _emptyTags(){
  $('#polls-root').children().each((i, el) => {
    $(el).remove();
  });
}

function asJSON(obj){
  document.getElementById('polls-root').innerHTML = JSON.stringify(obj);
}

export function presidentialPoll(state = 'national', format = 'html'){
  //$('.sk-circle').toggleClass('hidden');
  let id = _getPollID(state);
  if (format === 'html'){
    _make_request(id, htmlDisplay);
  } else {
    _make_request(id, asJSON);
  }
}

function _getPollID(state){
  if (typeof state === 'number'){
    return state;
  }
  state = state.toLowerCase();
  if (state === 'national'){
    return 5491;
  } else if (state === 'ohio'){
    return 5634;
  } else if (state === 'virginia'){
    return 5542;
  } else if (state === 'florida'){
    return 5635;
  } else if (state === 'michigan'){
    return 5533;
  } else if (state === 'pennsylvania'){
    return 5633;
  } else if (state === 'north carolina' ){
    return 5538;
  } else if (state === 'georgia'){
    return 5741;
  } else if (state === 'new hampshire'){
    return 5596;
  } else if (state === 'wisconsin'){
    return 5659;
  } else if (state === 'iowa'){
    return 5597;
  } else if (state === 'minnesota'){
    return 5591;
  } else if (state === 'missouri'){
    return 5609;
  } else if (state === 'colorado'){
    return 5751;
  } else if (state === 'nevada'){
    return 5891;
  } else if (state === 'arizona'){
    return 5832;
  } else if (state === 'oregon'){
    return 5892;
  } else if (state === 'california') {
    return  5849;
  } else if (state === 'massachusetts') {
    return  5863;
  } else if (state === 'dc') {
    return  5901;
  } else if (state === 'hawaii') {
    return  5902;
  } else if (state === 'maryland') {
    return  5859;
  } else if (state === 'rhode island') {
    return   5909;
  } else if (state === 'vermont') {
    return  5912;
  } else if (state === 'alaska') {
    return 5884;
  } else if (state === 'arkansas') {
    return 5899;
  } else if (state === 'kentucky') {
    return 5523;
  } else if (state === 'idaho') {
    return 5903;
  } else if (state === 'nebraska') {
    return 5905;
  } else if (state === 'north dakota') {
    return  5907;
  } else if (state === 'oklahoma') {
    return  5908;
  } else if (state === 'tennessee') {
    return 5911;
  } else if (state === 'west virginia') {
    return 5885;
  } else if (state === 'wyoming') {
    return  5913;
  } else if (state === 'washington')
       return 5895;
    else if (state === 'delaware')
       return 5900;
    else if (state === 'illinois')
       return 5583;
    else if (state === 'new york')
       return 5792;
    else if (state === 'new mexico')
       return 5894;
    else if (state === 'connecticut')
       return 5720;
    else if (state === 'maine')
       return 5896;
    else if (state === 'south carolina')
       return 5748;
    else if (state === 'utah')
       return 5971;
    else if (state === 'texas')
       return 5694;
    else if (state === 'montana')
       return 5893;
    else if (state === 'louisiana')
       return 5696;
    else if (state === 'south dakota')
       return 5910;
    else if (state === 'kansas')
       return 5904;
     else if (state === 'four-way-national'){
        return 5952;
  } else {
    return 5491;
  }
}

function _getSenateID(state){
  if (typeof state === 'number'){
    return state;
  }
  state = state.toLowerCase();
  switch (state) {
    case 'colorado':
      return 5984;
    case 'wisconsin':
      return 3740;
    case 'florida':
      return 5222;
    case 'indiana':
      return 6003;
    case 'pennsylvania':
      return 5074;
    case 'nevada':
      return 5982;
    case 'north carolina':
      return 5693;
    case 'new hampshire':
      return 3862;
    case 'missouri':
      return 5631;
    case 'ohio':
      return 5386;
    case 'iowa':
      return 5978;
    case 'arizona':
      return 5455;
    case 'california':
      return 5991;
    case 'new york':
      return 5851;
    default:
  }
}

export function senatePoll(state, format = 'html'){
  //$('.sk-circle').toggleClass('hidden');
  let id = _getSenateID(state);
  if (format === 'html'){
    _make_request(id, htmlDisplay);
  } else {
    _make_request(id, asJSON);
  }
}

var idx = 0;

export function pollChart(state){
  let id = _getPollID(state);
  _make_request(id, makeArray);
}

export function senateChart(state){
  let id = _getSenateID(state);
  _make_request(id, makeArray);
}

function makeArray(obj, size = 61) {
  let poll = obj.poll;
  if (!poll) poll = window.poll;
  if (!poll) {
    setTimeout( ()=> {
      return makeArray(obj);
    }, 1000);
  }
  else window.poll = poll;
  let rcpPoll = poll.rcp_avg;
  dates = rcpPoll.map( el => el.date.split([' ']).slice(1,4).join(' '));
  let dataArray = [];

  for (let i =0; i < rcpPoll[0].candidate.length; i++){
    let pollData2 = rcpPoll.map( (el, j) => (el.candidate[i].value) );
    let color;
    switch (rcpPoll[0].candidate[i].affiliation){
      case 'Democrat':
        color = 'blue';
        break;
      case 'Republican':
        color = 'red';
        break;
      case 'Green':
        color = 'green';
        break;
      case 'Libertarian':
        color = 'yellow';
        break;
      default:
        color = 'orange';
    }

    dataArray.push({data: pollData2.slice(0,size).reverse(), label: rcpPoll[0].candidate[i].name, borderColor: color});
  }
  var ctx = document.getElementById('canvas').getContext('2d');
  var data = {
    datasets: [{
      data: pollData
    }]
  };
  var myLineChart = new Chart.Line(ctx, {
    data: {datasets: dataArray, labels: dates.slice(0,size).reverse()
  },

    options: {}
  });
  if($('.canvas-container').length > 1) {
    $('.canvas-container').last().remove();
  }
  $('#smiles').append('<p class=hidden smiley>:)</p>');
  if($('.canvas-container').length) $('.sk-circle').addClass('hidden');
  $('.status').text('Request Complete.');
}
