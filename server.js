var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;
var database = require('./config/database');

require('./api/routes.js')(app);

app.use(function (error, request, response, next) {
 console.error(error.stack);
 response.status(400).send(error.message);
});

app.listen(port, function() {
 console.log('Node app is running at localhost:' + port);
});
