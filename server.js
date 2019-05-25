// Series of npm packages
var bodyParser = require('body-parser');
var express = require('express');
var fs = require('fs');
var path = require('path'); //Node.js built-in package
var app = express();


// Sets an initial port.
var PORT = process.env.PORT || 3000; 

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + "/app/public"));

//The Routes...
//Includes html-routes.js and api-routes.js in the server.js file and use Express
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// Start the server to begin listening
var server = app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});
