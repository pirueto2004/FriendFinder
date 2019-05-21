var path = require('path'); //Node.js built-in package

//Exporting the data to another js files
module.exports = function(app) {

    //Sends the file 'survey.html' to the web client whenever the path is '/survey'
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });

    
    //Sends the file 'home.html' to the web client whenever the path is the root '/' or it is nor defined
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
}