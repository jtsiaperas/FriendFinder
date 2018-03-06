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

function getBestFriend(myself, friendsList) {
    var bestFriend = 9;
    var closest = 100;
    var friends = friendsList;

    for (var i = 0; i<friends.length; i++)
    {
        var difference = myself.compare(friends[i]);
        
        if (difference <= closest)
        {
            closest = difference;
            bestFriend = i;
        }
    }

    return friends[bestFriend];
}

//Testing:
// friendsList.push(new Friend("Jonas","N/A",[5,5,5,5,5,5,5,5]));

// friendsList.push(new Friend("Jose","N/A",[4,4,4,4,4,4,4,4]));

// friendsList.push(new Friend("Jules","N/A",[1,1,1,1,1,1,1,1]));

// var me = new Friend("Austin","N/A",[3,3,3,3,3,3,3,3]);

// var result = getBestFriend(me,friendsList);

// console.log(result);
