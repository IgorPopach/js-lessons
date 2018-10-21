const fs = require('fs');
const path = require('path');
function blogInside(req, res) {
    // res.setCode = 200;
    console.log("blogInside working");
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    const stream = fs.createReadStream(path.join(__dirname, '..', 'view', 'blog-inside.html'));
    stream.pipe(res);
};
module.exports = blogInside;