const fs = require('fs');
const path = require('path');
function err404(req, res) {
    // res.setCode = 200;
    console.log("404 working")
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    const stream = fs.createReadStream(path.join('__dirname', '..', 'view', '404.html'));
    stream.pipe(res);
};
module.exports = err404;