'use strict'

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

/*
Add Schema and Middleware here
 */


let JokeModel= mongoose.model("Joke",JokeSchema);
module.exports = JokeModel;


