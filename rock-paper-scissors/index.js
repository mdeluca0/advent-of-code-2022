var fs = require("fs");

module.exports.rps1 = function() {
    var input = fs.readFileSync(__dirname + "/input.txt").toString();
    var rounds = input.split("\n");

    var dict = {
        "A X": 4,
        "A Y": 8,
        "A Z": 3,
        "B X": 1,
        "B Y": 5,
        "B Z": 9,
        "C X": 7,
        "C Y": 2,
        "C Z": 6,
    }

    var total = 0;

    for (let i = 0; i < rounds.length; i++) {
        total += dict[rounds[i]];
    }

    return total;
}

module.exports.rps2 = function() {
    var input = fs.readFileSync(__dirname + "/input.txt").toString();
    var rounds = input.split("\n");

    var dict = {
        "A X": 3,
        "A Y": 4,
        "A Z": 8,
        "B X": 1,
        "B Y": 5,
        "B Z": 9,
        "C X": 2,
        "C Y": 6,
        "C Z": 7,
    }

    var total = 0;

    for (let i = 0; i < rounds.length; i++) {
        total += dict[rounds[i]];
    }

    return total;
}