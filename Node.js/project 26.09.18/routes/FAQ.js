const fs = require('fs');
const path = require('path');
function FAQ(req, res) {
    // res.setCode = 200;
    console.log("FAQ working");
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    const stream = fs.createReadStream(path.join(__dirname, '..', 'view', 'FAQ.html'));
    stream.pipe(res);
};
module.exports = FAQ;