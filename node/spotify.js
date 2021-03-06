
var axios = require("axios");
const querystring = require('querystring');
exports.SpotifyClient = function (keys, category, term) {

    // console.log(keys);
    getToken(keys).then((response) => {
        this.accessToken = response;
        if(category == "song"){
            this.findInfoBySong(term);
        }
    });
    // console.log(this.accessToken);

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


async function getToken(keys) {
    var response = await axios.post("https://accounts.spotify.com/api/token", querystring.stringify({ grant_type: 'client_credentials' }), {
        auth: {
            username: keys.spotify.id,
            password: keys.spotify.secret
        }
    });
    return response.data.access_token;
}