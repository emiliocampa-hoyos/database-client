const Kitten = require("./models/KittenModel");


function findAll(done) {
    Kitten.find(function(err, kittens) {
        if (err)
            return console.log(err);
        done(kittens);    
    });
}


module.exports = findAll;