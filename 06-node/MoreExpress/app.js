const express = require('express');
const app = express();

app.get('/', function(req, res) {
  // res.send('<h1>Welcome to the home page!</h1><h2>blah blah</h2>');
  res.render('home.ejs');
});

app.get('/fallinglovewith/:thing', function(req, res) {
  const { thing } = req.params;
  res.render('love.ejs', { thingVar: thing });
});

app.listen(3000, function() {
  console.log('Server is listening!!!');
});
