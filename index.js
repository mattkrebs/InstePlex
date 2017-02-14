const PlexAPI = require("plex-api");
const credentials = require('plex-api-credentials');

const userAndPass = credentials({
    username: 'krebchak',
    password: 'Wallace44#',
    managedUser: {    // Required for Plex managed users
        name: 'krebchak'
    }
});

var client = new PlexAPI({
  hostname: '76.17.226.236',
authenticator: userAndPass });

client.query("/").then(function (result) {
    console.log("%s running Plex Media Server v%s",
        result.friendlyName,
        result.version);

    // array of children, such as Directory or Server items
    // will have the .uri-property attached
    console.log(result._children);
}, function (err) {
    console.error("Could not connect to server", err);
});
