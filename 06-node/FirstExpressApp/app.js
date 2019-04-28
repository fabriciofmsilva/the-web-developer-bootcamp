const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hi, there!');
});

app.get('/bye', function(req, res) {
  res.send('Goodbye!');
});

app.get('/dog', function(req, res) {
  res.send('Woof!');
});

app.get('/r/:subredditName', function(req, res) {
  res.send(`Welcome to the ${req.params.subredditName} subreddit!`);
});

app.get('/r/:subredditName/comments/:id/:title', function(req, res) {
  res.send('Welcome to the comments page!');
});

app.get('*', function(req, res) {
  res.send('You are a star!!!');
});

app.listen(3000, function() {
  console.log('Server has started on port 3000');
});
