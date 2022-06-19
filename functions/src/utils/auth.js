const BearerStrategy = require('passport-http-bearer').Strategy;
const functions = require('firebase-functions');
const jwt = require('jsonwebtoken');

module.exports = () =>
    new BearerStrategy(function (token, done) {
        functions.logger.info(token);
        jwt.verify(token, process.env.TOKEN_SECRET, (err, token) => {
            if (err) done(null, false);
            done(null, token, { scope: 'all' });
        });
    });
