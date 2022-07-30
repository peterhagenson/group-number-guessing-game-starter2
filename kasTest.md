app.get('/guesses', (req, res) => {
    console.log('GET /guesses');
    res.send(userInputs);
});

app.post('/guesses', (req, res) =>
    console.log('POST /guesses')
    userInputs.push(req.body); // This is pushing the inputs that we get from the users to the DOM?
    res.sendStatus(200); // this just sends us an OK on the url localhost:5000/guesses.
)

create a variable that contains random function number
and then res.send(randomNumberVariable)

randomNumber = () => {
    return Math.floor(Math.random()*25);
}

app.get('/random', (req, res)=>{
    console.log(randomNumber());
    res.send(randomNumber());
})


app.on('listening', randomNumber() {
    //
})

app.on('listening', helloWorld() {
    //this should call helloWorld
})

helloWorld = () => {
    console.log('Hello World');
};
DID NOT WORK
app.on('listening', function() {
  console.log('Hello World')
}); 