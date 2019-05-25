//Includes the data on friendsArray stored in friends.js file
var friends = require('../data/friends.js');

// //Exporting the data to another js files
module.exports = function(app) {
    app.get('/api/friends', function(req, res){
		res.json(friends);
	});


// Create new user - takes in JSON input
app.post("/api/friends", function(req, res) {
	 //Comparing user with their best friend match 
    //Object to hold the best match
	var totalDifference = 0;
	var bestMatch = {
		name: "",
		photo: "",
		difference: 1000 //Make the initial value of difference BIG for comparison
    };
    
    // Here we take the result of the user's survey POST and parse it.
    var userInput = req.body;
    var userName = userInput.name;
    var userScores = userInput.scores;
    // Converting the users score to a number (Instead of string)
    var b = userScores.map(function(item) {
        return parseInt(item, 10);
    });

    userInput = {
        name: req.body.name,
        photo: req.body.photo,
        scores: b
    };
    
    console.log("Name: " + userName);
    console.log("User Score: " + userScores);
    // Converting the users score to a sum number (Adds up all the numbers in array)
    var sum = b.reduce((a, b) => a + b, 0);
    console.log("Sum of user's score: " + sum);
    console.log("Best match friend difference: " + bestMatch.difference);

	// Loop through all the friend possibilities in the database. 
	for (var i = 0; i < friends.length; i++) {
		totalDifference = 0;
        console.log(friends[i].name);
        
        console.log("Best match friend difference: " + bestMatch.difference);
        for (var j = 0; j < userInput.scores.length; j++) {
		// for (var j = 0; j < friends[i].scores.length; j++) {
			totalDifference += Math.abs(friends[i].scores[j] - userInput.scores[j]);
            
            // If the sum of differences is less then the differences of the current "best match"
			if (totalDifference <= bestMatch.difference) {
				bestMatch.name = friends[i].name,
				bestMatch.photo = friends[i].photo,
				bestMatch.difference = totalDifference
            }  
        }
        console.log("Total Difference: " + totalDifference);
    }
    console.log(bestMatch);
    friends.push(userInput);
    console.log("New User added");
    console.log(userInput);
    // Return a JSON with the user's bestMatch. This will be used by the HTML in the next page.
    res.json(bestMatch);
    
});
}
