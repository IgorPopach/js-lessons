const fs = require('fs');
const path = require('path');
function about(req, res) {
    // res.setCode = 200;
    console.log("home working")
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    const stream = fs.createReadStream(path.join('__dirname', '..', 'view', 'about.html'));
    stream.pipe(res);
};
module.exports = about;