const express = require('express');
const bodyParser = require('body-parser');

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  parkName: String,
  park_id: String,
  reviews: [{
    contents: String,
    stars: Number,
    person: String
  }]
}); 

const Review = mongoose.model('Review', reviewSchema);

mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});

app.post('/api/reviews', async (req, res) => {
  try {
    await Review.findByIdAndUpdate(
      req.params.park_id, 
      {parkName: req.body.parkName},
      {$push: {"review": {contents: req.body.contents, stars: req.body.stars, person: req.body.person}}},
      {upsert: true, new: true}
    )
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/reviews', async (req, res) => {
  try {
    let reviews = await Review.findOne({
      parkIndex: req.params.parkIndex
    })
    res.send(reviews);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});