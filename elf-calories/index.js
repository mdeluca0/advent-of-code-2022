var fs = require("fs");

module.exports.elfCalories = function() {
    var input = fs.readFileSync(__dirname + "/input.txt").toString();
    var buckets = input.split("\n\n");
    var sums = [];

    for (let i = 0; i < buckets.length; i++) {
        var values = buckets[i].split("\n");
        var total = 0;
        for (let j = 0; j < values.length; j++) {
            total += parseInt(values[j]);
        }
        sums.push(total);
    }
    
    sums.sort(function(a, b){return b - a}); //descending

    return sums;
}