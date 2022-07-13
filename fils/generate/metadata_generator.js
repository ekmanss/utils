var fs = require('fs');

for (var i = 0; i < 27; i++) {
    var json = {}
    json.name = "Token #" + i;
    json.description = "This is the description for token #" + i;
    json.image = "ipfs://CHANGE TO YOUR IMAGES CID/" + i + ".png";

    fs.writeFileSync('' + i, JSON.stringify(json));
}