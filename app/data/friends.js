var friendsList = [];

function Friend(name,photo,scores) {
    this.name = name;
    this.photo = photo;
    this.scores = scores;
    this.compare = function(otherFriend) {
        var myScores = this.scores;
        var theirScores = otherFriend.scores;
        var difference = 0;
        for (i = 0; i<myScores.length; i++)
        {
            difference += Math.abs(myScores[i]-theirScores[i]);
        }
        return difference;
    }
}