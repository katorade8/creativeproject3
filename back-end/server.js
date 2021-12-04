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
  name: String,
  content: String,
})

mongoose.connect('mongodb://localhost:27017/museum', {
  useNewUrlParser: true
});