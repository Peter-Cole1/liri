var axios = require("axios");
var fs = require("fs");


console.log('this is loaded');

var Spotify = function() {
    console.log("hello i am bean");

    this.findArtist = function(term) {
        var URL = "https://api.spotify.com/uri/q=" + term;

        axios.get(URL).then(function(response) {
            var jsonData = response.data;

            var artistData = [
                "Artist: " + jsonData.name,
                "Genre: " + jsonData.genre,
                
            ]
        })
    }
}

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
