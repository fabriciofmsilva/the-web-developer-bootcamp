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

app.get('/posts', function(req, res) {
  var posts = [
    { title: 'Post 1', author: 'Susy' },
    { title: 'My adorable pet bunny', author: 'Charlie' },
    { title: 'Can you belive this pomsky?', author: 'Colt' },
  ];
  res.render('posts.ejs', { posts: posts });
});

app.listen(3000, function() {
  console.log('Server is listening!!!');
});
