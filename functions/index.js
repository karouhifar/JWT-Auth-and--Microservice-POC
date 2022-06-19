const functions = require('firebase-functions');
const app = require('./src');
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
exports.microservice = functions.https.onRequest((request, response) => {
    request.url = `/v1${request.url}`; // prepend '/v1' to keep query params if any
    functions.logger.info(request.path);
    return app(request, response);
});
