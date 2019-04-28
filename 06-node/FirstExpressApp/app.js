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

app.listen(3000, function() {
  console.log('Server has started on port 3000');
});
