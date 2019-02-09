const Kitten = require("./models/KittenModel");

function create(theThing, done) {

    Kitten.create(theThing, function(err, kitten) {
        if (err)
            return console.log(err);
       
        done("Created!!!"); 
    });
}

module.exports = create;