const express = require('express');
const router = express.Router();
const debug = require('debug')('spacehub:index');
// Source
const { appCache, } = require('../config');
const { todayDate, } = require('../lib/tools');

// API
let NasaAPI = require('../lib/api/NasaAPI');


/**
 * TODO: Cache implementation:
 * 1. Fastest: Client Side. Picture of the day requested only the first time, then is cached in the Cookies
 * (Accept Cookie?)
 *
 * 2. Fast> Server side. Keep some Queue / Deque in-memory (RAM) on the server side.
 *
 * 3. Slow: Keep cache on a file and read . Make as Generator and as Lazy as possible
 *
 * 4. Slowest: insert cache in a DB. Probably is a overkill???
 * tod0:
 *  We need to add another dimensions to the cache. Meaning that we shoudl first put the key as the 'YEAR' then by 'MONTH'
 *  its actual date. That's because well store as DB by year.
 * */
function load(req, res, next) {
    // TODO: Remove this in production
    let test = true;
    if (test) {
        debug("Testing, getting Test POD");
        // let data = NasaAPI.getPOSTest();
        res.locals.pod = NasaAPI.getPOSTestVideo();
        return next();
    }
    let today = todayDate()
    let todayPOD = appCache.getPOD(today);
    if (todayPOD) {
        res.locals.pod = todayPOD;
        return next();
    }

    let notFoundMsg = "Data not found, Requesting to Nasa POD";
    debug(notFoundMsg);
    console.debug(notFoundMsg);

    return NasaAPI.getPOD()
        .then(resp =>  {
           let data = resp.data
           debug("Storing new Data to Cache..");
           appCache.put(today, data);
           res.locals.pod = data;
           next();
        })
        .catch(err => {
            debug("Error while requesting data to Nasa POD");
            res.locals.pod = {};
            next(err);
        });


}


function index(req, res, next) {
  let pod = res.locals.pod;
  res.render('index', {...pod});
}

/* GET home page. */
router.get('/', load, index);
module.exports = router;

