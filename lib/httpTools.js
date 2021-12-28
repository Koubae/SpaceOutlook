const debug = require('debug')('spacehub:server');
const http = require('http');
const __appConfig__ = require('../config');
const { __dev__, port, host, server } = __appConfig__;


// Helpers
function _get_bind() {
    return typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
}


function start(app) {

    // ---------------- EVENT LISTENERS

    function onError(error) {
        if (error.syscall !== 'listen') throw error;

        let bind = _get_bind();

        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                debug(`onError Listener: Error on switch EACCES ${bind} requires elevated privileges`);
                process.exit(1);
                break;

            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                debug(`onError Listener: Error on switch EADDRINUSE ${bind} is already in use`);
                process.exit(1);
                break;

            default:
                throw error;
        }
    }

    function onListening() {
        if (server === undefined) return;
        let addr = server.address();
        debug('Listening on ' + _get_bind(addr));
    }

    /**
    * Create HTTP server.
    * TODO: Make HTTPS Server
    *
    * */

    function _creaeteHTTPServer(app) {
        let server = http.createServer(app);
        app.set('port', port);
        // Adding to config
        Object.assign(__appConfig__, {  app: app, server: server })
        server.on('error', onError);
        server.on('listening', onListening);
        server.listen(port, host, () => {
            let message = `Server running at http://${host}:${port}/`
            debug(message);
          console.log('\x1b[34m%s\x1b[0m', message);
        });
    }
    _creaeteHTTPServer(app);


}

exports.start = start;
