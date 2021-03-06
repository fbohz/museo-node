
const express = require('express');
const app = express();
const morgan = require('morgan');
const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

const baseUrlTours = '/api/v1/tours';
const usersBaseUrl = '/api/v1/users';

// MIDDLEWARES
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
// Data from body is added to the object (req.body)
app.use(express.json());
//serve static files from public folder access as e.g. /overview.html.
app.use(express.static(`${__dirname}/public`))

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