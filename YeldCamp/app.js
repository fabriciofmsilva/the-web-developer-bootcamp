const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

const campgrounds = [
  {name: 'Salmon Creek', image: 'https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg'},
  {name: 'Granite Hill', image: 'https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg'},
  {name: `Moutain Goat's Rest`, image: 'https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg'},
];

app.get('/', function(req, res) {
  res.render('landing');
});

app.get('/campgrounds', function(req, res) {
  res.render('campgrounds', { campgrounds });
});

app.post('/campgrounds', function(req, res) {
  const { name, image } = req.body;
  const newCampground = { name, image };
  campgrounds.push(newCampground);
  res.redirect('/campgrounds');
});

app.get('/campgrounds/new', function(req, res) {
  res.render('new.ejs');
});

app.listen(3000, function() {
  console.log('The YelpCamp server has started!');
});
