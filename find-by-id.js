const Kitten = require("./models/KittenModel");

function findById(id, done){

    Kitten.findById(id, function(err, kitten) {
        if (err)
            return console.log(err);
        done(kitten);
    });
}


module.exports = findById;

