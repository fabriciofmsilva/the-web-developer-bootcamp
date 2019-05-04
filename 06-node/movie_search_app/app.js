const express = require('express');
const app = express();
const request = require('request');

app.set('view engine', 'ejs');

app.get('/results', function(req, res) {
  request('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb', function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      res.render('results', { data });
    }
  });
});

app.listen(3000, function() {
  console.log('Movie App has started!');
});
