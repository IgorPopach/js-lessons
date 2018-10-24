const fs = require('fs');
const path = require('path');
function home(req,res) {
    console.log("home working");
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    const stream = fs.createReadStream(path.join(__dirname, '..', 'views', 'index.html'));
    stream.pipe(res);
}

module.exports = home;