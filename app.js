var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// Environment variables
require('dotenv').config();

// Mongoose
mongoose.connect(
    process.env.KOLV02_DATABASE || 'mongodb://localhost/kolv02',
    {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

// Models
const normalizedPath = require("path").join(__dirname, "models");
require("fs").readdirSync(normalizedPath).forEach(function(file) {
    require("./models/" + file);
});

// Passport
require('./config/passport');

// Routes
var usersRouter = require('./routes/users');
var activitiesRouter = require('./routes/activities');
var bussesRouter = require('./routes/busses');
var groupsRouter = require('./routes/groups');
var lunchesRouter = require('./routes/lunches');
var workdaysRouter = require('./routes/workdays');
var workdayTemplatesRouter = require('./routes/workdayTemplates');

var app = express();

// Swagger endpoint
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// cors for cross origin requests
let cors = require('cors');
app.use(cors({ origin: '*' }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());

app.use('/API/users', usersRouter);
app.use('/API/activities', activitiesRouter);
app.use('/API/busses', bussesRouter);
app.use('/API/groups', groupsRouter);
app.use('/API/lunches', lunchesRouter);
app.use('/API/workdays', workdaysRouter);
app.use('/API/workdayTemplates', workdayTemplatesRouter);

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
  res.json({ error: err });
});

module.exports = app;
