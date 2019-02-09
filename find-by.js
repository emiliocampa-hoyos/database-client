const Kitten = require("./models/KittenModel");


function findBy(theValue, done) {
    let temp = { name: theValue };

    Kitten.find(temp, function(err, kitten) {
        if (err)
            return console.log(err);
        done(kitten);
    });
}


module.exports = findBy;
