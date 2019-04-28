const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hi there, welcome to my assignment!');
});

app.get('/speak/:animal', function(req, res) {
  const { animal } = req.params;
  const sounds = {
    pig: 'Oink',
    cow: 'Moo',
    dog: 'Woof Woof',
  };

  res.send(`The ${animal} says, '${sounds[animal.toLowerCase()] || 'Blah'}'!`);
});

app.get('/repeat/:message/:times', function(req, res) {
  const { message, times } = req.params;
  res.send(
    new Array(Number(times))
      .fill(message)
      .join(' ')
  );
});

app.get('*', function(req, res){
  res.send('Sorry, page not found... What are you doing with your life?');
});

app.listen(3000, function() {
  console.log('Running');
})
