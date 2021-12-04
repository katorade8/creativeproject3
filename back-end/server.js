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

const reviewPageSchema = new mongoose.Schema({
  parkName: String,
  park_id: String,
  reviews: [{
    contents: String,
    stars: Number,
    person: String
  }]
}); 

const ReviewPage = mongoose.model('ReviewPage', reviewPageSchema);

mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});

app.post('/api/reviews', async (req, res) => {
  var valid;
  try {
    valid = await ReviewPage.findByIdAndUpdate(
      req.params.park_id, 
      {parkName: req.body.parkName},
      {$push: {"reviews": {contents: req.body.contents, stars: req.body.stars, person: req.body.person}}},
      {upsert: true, new: true}
    )
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
  if (valid == null) { //gotta make a new Review Object
    const reviewPage = new ReviewPage({
      parkName: req.body.parkName,
      park_id: req.body.park_id,
      reviews: []
    });
    review = {contents: req.body.contents, stars: req.body.stars, person: req.body.person};
    reviews.push(review);
    try {
      await reviewPage.save();
      res.send(reviewPage);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
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