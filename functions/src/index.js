const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
require('dotenv').config();
const app = express();

app.use(helmet());
app.use(cors({ origin: true }));
// const HTTP_PORT = parseInt(process.env.PORTS || 8080, 10);

app.use('/v1', routes);

// app.listen(HTTP_PORT, () => {
//     console.info('Server: ' + HTTP_PORT);
// });

module.exports = app;
