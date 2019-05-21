var bodyParser = require('body-parser');
var express = require('express');
var path = require('path'); //Node.js built-in package
var app = express();
var PORT = process.env.PORT || 8080;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

//All the Routes go here..
//Includes html-routes.js and api-routes.js in the server.js file and use Express
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

var server = app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});