const fs = require('fs');
const path = require('path');
const request = require('../modules/request');
const url = require('url');

function search(req,res) {
    const parsedUrl = url.parse(req.url, true);
    console.log(`req ${req}`);
    console.log(`parsedUrl ${parsedUrl}`);
    const title = parsedUrl.query.title;
    console.log(title);
    

    request(title, (error, movies) => {console.log(movies)})
    console.log("movies working");
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    const stream = fs.createReadStream(path.join(__dirname, '..', 'views', 'movies.html'));
    stream.pipe(res);
}

module.exports = search;