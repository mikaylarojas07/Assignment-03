//Main configuration file

//require .env configuration
//Loads content from .env, which currently stores the MONGODB connection string
//Password never appears in the code as a hardcoded value, keeping my info safe
require('dotenv').config();
const mongoose = require('mongoose'); 

//Adapted from stack overflow, see README for details/link
//Connects to the MongoDB cluster using the connection string in .env
mongoose.connect(process.env.MONGODB_URI);

//prints message in the terminal when the connection succeeds/fails
mongoose.connection.on('connected', () => {
    console.log('MongoDB Connected');
});

mongoose.connection.on("error", (err) => {
  console.log("MongoDB Error:", err);
});

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//import the route files
var indexRouter = require('./routes/index');
var assignmentsRouter = require('./routes/assignments');

var usersRouter = require('./routes/users');

//create Express application
var app = express();

// view engine setup
//tells us that page templates live in "views" folder, and are written in ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//serve node_modules folder, so page can load Bootstrap and fontawesome.
app.use(express.static(path.join(__dirname, 'node_modules')));

//Mounting the routers: URLs starting with / use index.js, and /assignments use assignments.js
app.use('/', indexRouter);
app.use('/assignments', assignmentsRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
