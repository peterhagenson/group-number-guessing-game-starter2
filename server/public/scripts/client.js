$(document).ready(handleReady);
//import module exports here and then we can use that function/randomNumber here.
// let randomNumber = require('./server.js');
let randomNumberServer;
console.log('RANDOM NUMBER: ',randomNumberServer);

function handleReady() {
  getResponse();
  console.log("jquery is loaded!")
$('#submitBtn').on('click', submitGuess);


}
function submitGuess() {
  console.log('clicked')
  let guesses = {
    playerOne: $('#playerOneIn').val(),
    playerTwo: $('#playerTwoIn').val(),
    playerThree: $('#playerThreeIn').val(),
    playerFour: $('#playerFourIn').val(),
    playerFive: $('#playerFiveIn').val(),
  };
  $('#playerOneIn').val(''),
  $('#playerTwoIn').val(''),
  $('#playerThreeIn').val(''),
  $('#playerFourIn').val(''),
  $('#playerFiveIn').val(''),

  $.ajax({
    method:'POST', 
    url: '/guesses',
    data: guesses
  }).then(function (response){
    getResponse();
  })
  
};

function getResponse() {
  console.log('getting guesses');

  $.ajax({
    method: 'GET',
    url: '/guesses',

  }).then(function(response){
    console.log(response);

    renderToDom(response)
  })
};

function renderToDom(guesses) {
  console.log('in renderToDOM');
  $('#resultsTable').empty();

  for (let property in guesses){
    $('#resultsTable').append(`
    <tr>
      <td>${guesses[property]}</td>
    </tr>
    
      
      `)}
};












