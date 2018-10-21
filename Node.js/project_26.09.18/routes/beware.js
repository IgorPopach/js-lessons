const fs = require('fs');
const path = require('path');
function beware(req, res) {
    // res.setCode = 200;
    console.log("beware working");
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    const stream = fs.createReadStream(path.join(__dirname, '..', 'view', 'beware.html'));
    stream.pipe(res);
};
module.exports = beware;