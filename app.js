
const express = require('express');
const app = express();
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const baseUrlTours = '/api/v1/tours';
const usersBaseUrl = '/api/v1/users';

// MIDDLEWARES

// Data from body is added to the object (req.body)
app.use(morgan('dev'));

app.use(express.json());

app.use((req, res, next) => {
  console.log('hi from middleware');
  next();
});

app.use((req, res, next) => {
  // current time of request e.g.
  req.requestTime = new Date().toISOString();
  next();
});

// MOUNT ROUTES
app.use(baseUrlTours, tourRouter);
app.use(usersBaseUrl, userRouter);

module.exports = app