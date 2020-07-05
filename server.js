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

// starting server
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});