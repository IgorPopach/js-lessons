const express = require('express');
const server = express();
const mainHead = require('./js/main-head');

server.set('view engine', 'pug');
server.use('/css', express.static(__dirname + '/css'));
server.use('/js', express.static(__dirname + '/js'));
server.use('/img', express.static(__dirname + '/img'));
server.use('/fonts', express.static(__dirname + '/fonts'));
server.get("/",(request, response) => {
    response.render('index', {
        title:"mySite",
        toll_for_free:"+3(8068)123-456-78",
     
    })
});
server.listen(80, () => console.log('running'));