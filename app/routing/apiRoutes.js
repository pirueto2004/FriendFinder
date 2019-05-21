//Includes the data on friendsArray stored in friends.js file
var friendsData = require('../data/friends.js');

//Exporting the data to another js files
module.exports = function(app) {
    //Display the tableData in json format
    app.get('/api/friends', function(req, res){
        res.json(friendsData);
    });

    // //Update with POST the friendsData when a new reservation is made
    //  app.post('/api/friends', function(req, res){
    //     if(friendsData.length < 5) {
    //         friendsData.push(req.body);
    //         res.json(true);
    //     } else {
    //         waitListData.push(req.body);
    //         res.json(false);
    //     }
    // });

    // //Clear with POST the tableData and waitingListData when you click on 'Clear Table' link
    // app.post('/api/clear', function(){
    //     tableData = [];
    //     waitListData = [];
    //     console.log(tableData);
    //     console.log(waitListData);
    // });

}