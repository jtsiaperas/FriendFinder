
module.exports = function(app){
    
    app.get("/api/friends", function(req,res){
        res.json({route: "api/friends", method: "get", implemented: false});
    });
    
    app.post("api/friends", function(req,res){
        res.json({route: "api/friends", method: "post", implemented: false});
    });

};