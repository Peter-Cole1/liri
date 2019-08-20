require("dotenv").config();
var fs = require("fs");
var keys = require("./keys");
var spotify = new Spotify(keys.spotify);

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (search === "spotify-this-song") {
    console.log("wait, you might like katy perry more");
    spotify.findArtist(term);
}
