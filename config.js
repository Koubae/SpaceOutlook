/**
* Setting Envirorment
* TODO: Make a separate config.json or use .env https://stackoverflow.com/a/37869780/13903942
* Heroku: $ heroku config:set NODE_ENV="production"
*/
const cache = require('./lib/cache');
const PORT = process.env.PORT || 5000;
const BUILD = process.env.BUILD;
const HOST =  BUILD !== 'production' ? '127.0.0.1' : 'https://desolate-sea-56993.herokuapp.com/';
const APPNAME = process.env.APPNAME;
const emailAddr = process.env.EMAIL_ADMIN;
const AppPass = process.env.EMAIL_ADMIN_PASS;
const clientId = process.env.EMAIL_CLIENT_ID;
const clientSecret = process.env.EMAIL_CLIENT_SECRET;
const refreshToken = process.env.EMAIL_REFRESH_TOKEN;
const email_service = process.env.EMAIL_SERVICE;
const auth = process.env.EMAIL_AUTH;
const DEBUG = process.env.DEBUG;

const serverConfigOAuth =  {
      service: email_service,
      auth: {
        type: auth,
        user: emailAddr,
        pass: AppPass,
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: refreshToken
      }
    }


process.env.NODE_ENV = BUILD;
process.env.PORT = PORT;
process.env.DEBUG = DEBUG;


module.exports = {
        __dev__: BUILD !== 'production',
        port: PORT,
        host: HOST,
        server: undefined,
        appCache: cache.appCache,
        appName: APPNAME,
        // Email address
        emailAddr: emailAddr,
        serverConfigOAuth: serverConfigOAuth,
}


