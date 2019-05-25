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
	let bestMatch = {
		name: "",
		photo: "",
		difference: 1000 //Make the initial value of difference BIG for comparison
    };
    
    // Here we take the result of the user's survey POST and parse it.
    let userInput = req.body;
    let userName = userInput.name;
    let userPhoto = userInput.photo;
    let userScores = userInput.scores;
    // Converting the users score (String) ['1', '3', '5', ...] to numbers [1, 3, 5, ...]
    let b = userScores.map(function(item) {
        return parseInt(item, 10);
    });

    userInput = {
        name: userName,
        photo: userPhoto,
        scores: b
    };
    
    console.log("Name: " + userName);
    console.log("User Score: " + userScores);
    // Converting the users score to a sum number (Adds up all the numbers in array)
    let sumScores = b.reduce((a, b) => a + b, 0);
    console.log("Sum of user's score: " + sumScores);
    console.log("Best match friend difference: " + bestMatch.difference);

	// Loop through all the friend possibilities in the database. 
	for (var i = 0; i < friends.length; i++) {
		let totalDifference = 0;
        console.log(friends[i].name);
        
        console.log("Best match friend difference: " + bestMatch.difference);
        for (var j = 0; j < userInput.scores.length; j++) {
			totalDifference += Math.abs(friends[i].scores[j] - userInput.scores[j]);
        }
         // If the sum of differences is less then the differences of the current "best match"
        if (totalDifference <= bestMatch.difference) {
            bestMatch.name = friends[i].name,
            bestMatch.photo = friends[i].photo,
            bestMatch.difference = totalDifference
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
