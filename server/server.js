const express = require('express');
const bodyParser = require('body-parser')
let randomNumberServer = require('./server.js');
const app = express();
const PORT = 5000;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}))

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
  randomNumberGen();
})

let userInputs;



function randomNumberGen(){
  return Math.floor(Math.random() * (25 - 1) + 1);
};
let randomNumber = randomNumberGen();

app.get('/guesses', function(req, res) {
  console.log('GET /guesses');
  
  res.send(userInputs);
});

app.post('/guesses', (req, res) => {
    console.log('POST /guesses');
    console.log(req.body);
    // userInputs.push(req.body);
    userInputs = req.body;
    comparison();
    res.sendStatus(200); 
});


function comparison() {
  console.log('in comparison');
//  console.log(userInputs);
  console.log(randomNumber);

  for(const property in userInputs) {
    // console.log(`${property}: ${userInputs[property]}`);
    if(userInputs[property] > randomNumber) {
      console.log('Number too high');
    }
    else if (userInputs[property] < randomNumber) {
      console.log('Number too low');
    }
    else {
      console.log('WINNER!');
    }
  }
}