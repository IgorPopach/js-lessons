const fs = require('fs');
const path = require('path');

function notFound(req,res) {
    console.log("notFound working");
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    const stream = fs.createReadStream(path.join(__dirname, '..', 'views', '404.html'));
    stream.pipe(res);
}

module.exports = notFound;