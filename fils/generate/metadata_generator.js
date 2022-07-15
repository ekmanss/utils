var fs = require('fs');

for (var i = 1000; i < 9999; i++) {
    var json = {}
    json.name = "Token #" + i;
    json.description = "This is the description for token #" + i;
    // json.image = "https://cryptobums.mypinata.cloud/ipfs/QmVCdRvbs6Hcj49Xwe1tUtxnbhDpvvnYysaY5AV9MHkbwU/" + i + ".png";
    json.image_data = "https://cryptobums.mypinata.cloud/ipfs/QmVCdRvbs6Hcj49Xwe1tUtxnbhDpvvnYysaY5AV9MHkbwU/" + i + ".png";
    fs.writeFileSync('metadata/' + i, JSON.stringify(json));
}