var axios = require("axios");

exports.OMDBClient = function (keys, category, term) {

    

    this.findInfoBySong = (term) => {
        // console.log("Looking for song information");
        var URL = "https://api.spotify.com/v1/search?q=" + term + "&type=track";
        // console.log(this.accessToken);
        axios.get(URL, {
            headers: { 'Authorization': 'Bearer ' + this.accessToken }
        }).then((response) => {
            var songData = response.data.tracks.items[0];

            
            console.log("\nSong name: " + songData.name + "\n\n----------------------------------")
            console.log("\nArtist name: " + songData.artists[0].name + "\n\n----------------------------------")
            console.log("\nAlbum name: " + songData.album.name + "\n\n----------------------------------")
        })
    }
}