var friends = require("../data/friends.js");


module.exports = function(app){
    var bodyParser = require("body-parser");
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get("/api/friends", function(req,res){
        res.json(friends.friendsList);
    });
    
    app.post("/api/friends", function(req,res){
        var newUser = new friends.Friend(req.body.name,req.body.image,req.body.scores);
        res.json(friends.getBestFriend(newUser,friends.friendsList));
    });

};