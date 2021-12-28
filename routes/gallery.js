const express = require('express');
const router =  express.Router();
const debug = require('debug')('spacehub:gallery');

const { appCache, } = require('../config');
const { getTodayMonthRange, } = require('../lib/tools');
// API
let NasaAPI = require('../lib/api/NasaAPI');


function load(req, res, next) {

    let firstDay = getTodayMonthRange(); // The first day is enough, last day default date of today
    let key = `range_${firstDay}`;
    let rangePOD = appCache.getPOD(key);
    if (rangePOD) {
        res.locals.rangePOD = rangePOD;
        return next();
    }
    let notFoundMsg = `POD Date Range ${firstDay} not found, Requesting to Nasa POD`;
    debug(notFoundMsg);
    return NasaAPI.getPODDateRange(firstDay)
        .then(resp =>  {
           let data = resp.data
           debug("Storing new Data to Cache..");
           appCache.put(key, data);
           res.locals.rangePOD = data;
           next();
        })
        .catch(err => {
            debug("Error while requesting data to Nasa POD");
            res.locals.pod = {};
            next(err);
        });

}

function index(req, res, next) {
    let rangePOD = res.locals.rangePOD;
    return res.render('gallery', {pods: rangePOD});
}


router.get('/', load, index);
module.exports = router;
