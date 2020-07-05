/* eslint-disable prefer-destructuring */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// read config.env file and save as env variables
dotenv.config({
  path: './config.env',
});

const app = require('./app');

const DB = process.env.DB.replace('<PASSWORD>', process.env.DB_PSW);
// console.log(process.env)

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => {
  console.log('DB CONNECTED!');
})

// mongoose schema

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'tour must have name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5
  },
  price: {
    type: Number,
    required: [true, 'tour must have price']
  }
})

// mongoose model - use uppercase on Models

const Tour = mongoose.model('Tour', tourSchema)

// const testTour = new Tour({
//   name: "Campesino Router",
//   rating: 4.9,
//   price: 199
// })

// testTour.save().then(doc => {
//   console.log(doc)
// }).catch(err => console.log('ERROR: ', err))

// starting server
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});