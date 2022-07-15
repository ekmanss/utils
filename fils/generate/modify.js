var fs = require('fs');

function writeRecord(path, image_data) {
    new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                throw err;
            }

            const metadata = JSON.parse(data.toString());
            metadata.image_data = image_data

            const newData = JSON.stringify(metadata);
            try {
                fs.writeFileSync(path, newData);
            } catch (error) {
                console.error(error);
                reject(error);
            }
            resolve(newData);
        });
    }).then();
}

function main() {
    for (var i = 0; i < 5; i++) {
        let image_data = "https://cryptobums.mypinata.cloud/ipfs/QmVCdRvbs6Hcj49Xwe1tUtxnbhDpvvnYysaY5AV9MHkbwU/" + i + ".png";
        let path = "./metadata/" + i;
        writeRecord(path, image_data);
    }
}

main();