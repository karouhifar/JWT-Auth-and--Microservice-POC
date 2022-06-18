const functions = require('firebase-functions');
const app = require('./src');
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.microservice = functions.https.onRequest(app);
