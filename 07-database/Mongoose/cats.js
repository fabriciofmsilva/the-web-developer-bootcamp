const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cat_app');

const catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String,
});

const Cat = mongoose.model('Cat', catSchema);

// const george = new Cat({
//   name: 'Mrs. Norris',
//   age: 7,
//   temperament: 'Evil',
// });

// george.save(function(err, cat) {
//   if (err) {
//     console.log('Something went wrong!');
//     return;
//   }

//   console.log('We just saved a cat to the DB:');
//   console.log(cat);
// });

Cat.create({
  name: 'Snow White',
  age: 15,
  temperament: 'Bland',
}, function(err, cat) {
  if (err) {
    console.log('Oh no, error!');
    console.log(err);
    return;
  }

  console.log(cat);
});

Cat.find({}, function(err, cats) {
  if (err) {
    console.log('Oh no, error!');
    console.log(err);
    return;
  }

  console.log('All the cats');
  console.log(cats);
});
