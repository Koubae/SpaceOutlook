const createError = require('http-errors');

/**
 * catch 404 and forward to error handler
 * */
function errorNotFound(req, res, next) {
    next(createError(404));
}


/**
 * Last resort Middleware error handler
 * */
function errorHandler(err, req, res, next) {
    // set locals, only providing error in development
    if (req.app.get('env') === 'development') {
      res.locals.messageAdmin = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};
    }
    res.locals.message = 'Opps - Page not found';
    res.locals.status = err.status || 500;
    // render the error page
    res.status(err.status || 500);
    res.render('error');
}

let middlewareErrors = [errorNotFound, errorHandler];

module.exports = middlewareErrors;
