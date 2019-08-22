require("dotenv").config();

var fs = require("fs");
var keys = require("./keys");
var spotify = require("./spotify");


var search = process.argv[2];



if (search === "spotify-this-song") {
    var term = process.argv.slice(3).join("%20");
    var sClient = new spotify.SpotifyClient(keys, "song", term);
}

//support for the omdb and Bands In Town Artist Events API didn't make it in. 
