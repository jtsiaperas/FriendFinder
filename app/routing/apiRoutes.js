var friends = require("../data/friends.js");

module.exports = function(app){
    
    app.get("/api/friends", function(req,res){
        res.json(friends.friendsList);
    });
    
    app.post("api/friends", function(req,res){
        res.json({route: "api/friends", method: "post", implemented: false});
    });

};