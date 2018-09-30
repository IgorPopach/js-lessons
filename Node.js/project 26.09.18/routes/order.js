const fs = require('fs');
const path = require('path');
function order(req, res) {
    // res.setCode = 200;
    console.log("order working");
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    const stream = fs.createReadStream(path.join(__dirname, '..', 'view', 'order.html'));
    stream.pipe(res);
};
module.exports = order;