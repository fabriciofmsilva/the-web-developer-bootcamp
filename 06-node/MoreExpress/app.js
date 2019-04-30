const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  // res.send('<h1>Welcome to the home page!</h1><h2>blah blah</h2>');
  res.render('home');
});

app.get('/fallinglovewith/:thing', function(req, res) {
  const { thing } = req.params;
  res.render('love', { thingVar: thing });
});

app.get('/posts', function(req, res) {
  var posts = [
    { title: 'Post 1', author: 'Susy' },
    { title: 'My adorable pet bunny', author: 'Charlie' },
    { title: 'Can you belive this pomsky?', author: 'Colt' },
  ];
  res.render('posts', { posts: posts });
});

app.listen(3000, function() {
  console.log('Server is listening!!!');
});
