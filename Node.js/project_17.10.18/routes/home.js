const fs = require('fs');
const path = require('path');
function home(req, res) {
    // res.setCode = 200;

    axios.get('http://www.omdbapi.com/?s=predator&apikey=e3232cc1')
    .then(response => {
        render('index', {
        Title: response.data.Search[0].Title
        }
        )
    // console.log(response.data.Search);
    // console.log(response.data.url);
    // console.log(response.data.explanation);
    })
    .catch(error => {
    console.log(error);
    });
    res.render('index', {
        Title: response.data.Search[0].Title
        })
    console.log(response.data.Search);
    console.log("home working");
    res.writeHead(200,{ 'Content-Type': 'text/html' });
    const stream = fs.createReadStream(path.join(__dirname, '..', 'view', 'index.html'));
    stream.pipe(res);
};
module.exports = home;