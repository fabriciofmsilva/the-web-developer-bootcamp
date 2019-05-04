const express = require('express');
const app = express();
const request = require('request');

app.get('/results', function(req, res) {
  request('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb', function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const results = JSON.parse(body);
      res.send(results.Search[0].title);
    }
  });
});

app.listen(3000, function() {
  console.log('Movie App has started!');
});
