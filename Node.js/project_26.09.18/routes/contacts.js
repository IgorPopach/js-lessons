const fs = require('fs');
const path = require('path');
function contacts(req, res) {
    // res.setCode = 200;
    console.log("contacts working");
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    const stream = fs.createReadStream(path.join(__dirname, '..', 'view', 'contacts.html'));
    stream.pipe(res);
};
module.exports = contacts;