const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./route');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use('/', routes);
app.listen(8081, () =>
    console.log('Server started at port: 8081'));