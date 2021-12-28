const express = require('express');
const router =  express.Router();
const send = require('../lib/emailServer');
const debug = require('debug')('spacehub:contact_me');



router.post('/sendMsg', async function(req, res, next) {

    let name = req.body.name;
    let userEmail = req.body.userEmail;
    let subject = req.body.subject;
    let message = req.body.message;
    let errors = [];
    if (!name) errors.push('Name is missing');
    if (!userEmail) errors.push('Email is missing');
    if (!subject) errors.push('Subject is missing');
    if (!message) errors.push('Messsage is missing');

    let successMsg = "Message Send successfully";
    await send(name, userEmail, subject, message)
        .then((result) => {
            if (errors && errors.length > 0)  res.render('contact_me', {errors: errors});
            else res.render('contact_me', {success: successMsg});
        })
        .catch((err) => {
            console.error(err);
            debug(err);
            res.render('contact_me', {errors: err});
        })

});

router.get('/', function(req, res, next) {
    res.render('contact_me', );
});


module.exports = router;
