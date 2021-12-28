const express = require('express');
const router = express.Router();
const debug = require('debug')('spacehub:endpoints');
// Source
const { appCache, } = require('../config');
const { todayDate, } = require('../lib/tools');
// API
const NasaAPI = require("../lib/api/NasaAPI");


/**
 * Middleware ment to be called Client-Side using JS fetch.
 *
 * We don't return any error because it will be done by the async function on front-end. It assumes that
 * a picture MUST be returned, else it must be treated as an error if nothing is returned.
 * */

router.post('/pod', function(req, res, next) {
    let isToday = req.body.is_today;
    let date = req.body.date;

    res.setHeader('Content-Type', 'application/json');

    // ---------------- ERRORS
    if (!isToday && !date) {
        let errMsg = (`Unexpected request toEndpoint /pod requested with params ${req.params} | JSON Content --> ${req.body}`);
        console.error(errMsg);
        return next(errMsg); // Error will bubble up to the error handler!
    }
    let method, key, arg = undefined;
    if (isToday) {
        method = NasaAPI.getPOD.bind(NasaAPI);
        key = todayDate();
    } else {
        method = NasaAPI.getPODDate.bind(NasaAPI);
        key = date;
        arg = date;
    }
    let cached = appCache.getPOD(key);
    if (!cached) {

        return method(arg).then(resp => {
            let data = {
                found: true,
                error: false,
                data: resp.data,
            }

            appCache.put(key, resp.data);
            res.end(JSON.stringify(data));
        })
        .catch(err => console.error("Error while requesting data | Error", err))
    }

    let data = {
        found: true,
        error: false,
        data: cached,
    }
    return res.end(JSON.stringify(data));
});

module.exports = router;
