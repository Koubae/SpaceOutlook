const path = require('path');
const express = require('express');

const cookieParser = require('cookie-parser');
const logger = require('morgan');

const __appConfig__ = require('./config');
const { __dev__, port, server, appName } = __appConfig__;

// Middlewares
const middlewareErrors = require('./lib/middleware/errors');

// Routers
const indexRouter = require('./routes/index');
const galleryRouter = require('./routes/gallery');
const aboutRouter = require('./routes/about');
const contactMeRouter = require('./routes/contact_me');
const endPointsRouter = require('./routes/endpoints');

// Init Main app
let app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// App setup
app.locals.appName = appName;

// ----------------- < APPLICATION MIDDLEWARE >  ----------------- \\
if (__dev__) {
    app.use(logger('dev'));
} else {
   app.use(logger(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status (:response-time ms) :res[content-length] ":referrer" ":user-agent" '));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ----------------- < PUBLIC MIDDLEWARE >  ----------------- \\
// todo: move into routes folder
app.use('/', indexRouter);
app.use('/gallery', galleryRouter);
app.use('/about', aboutRouter);
app.use('/contact_me', contactMeRouter);
app.use('/api/v1/', endPointsRouter);

// ----------------- < ERROR MIDDLEWARE >  ----------------- \\
app.use(middlewareErrors);

module.exports = app;
