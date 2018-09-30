const fs = require('fs');
const path = require('path');
function blog(req, res) {
    // res.setCode = 200;
    console.log("blog working");
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    const stream = fs.createReadStream(path.join(__dirname, '..', 'view', 'blog.html'));
    stream.pipe(res);
};
module.exports = blog;