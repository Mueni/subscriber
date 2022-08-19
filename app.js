/* var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var subscriberRouter = require('./routes/subscribers');

var app = express();

// view engine setup

//loadstatic assets with virtual path
app.use("/static", express.static("public"));

//Setting up the front end (html)
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/subscriber', subscriberRouter);

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


//route to homepage
app.get('/', function(req, res){
  res.send('Invalid endpoint')
});



module.exports = app;
 */
const express = require("express");
const mongoose = require('mongoose');
const config = require('./config/database');

// const config = require('./config/database');
const app = express();

//port number
const port = 3000;

//db connection
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected', function () {
    console.log('Connected to database' + config.database);
    app.listen(port, () => {
        console.log('subscriber server up on port' + port);
    });
});

//error connection
mongoose.connection.on('error', function (err) {
    console.log('database error' + err);
});


//loadstatic assets with virtual path
// app.use("/static", express.static("public"));

app.use(express.static(__dirname + '/public'));

// js scripts
// app.use('/scripts', express.static(__dirname + '/scripts/'));

//Setting up the front end (html)
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

const indexRouter = require('./routes/index');
const subscriberRouter = require('./routes/subscribers');


app.use('/', indexRouter);
app.use('/subscriber', subscriberRouter);







