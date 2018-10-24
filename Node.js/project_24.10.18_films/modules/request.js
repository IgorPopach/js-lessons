const API = require('./config');
const http = require('http');

function request(title, callback) {
    const req = http.get(`${API.baseUrl} + ${title} + &apikey=${API.apikey}`, res => {
        if(res.statusCode !==200) {
            callback(new Error(`Opps...${res.statusCode} ${res.statusMessage}`));
            res.resume();
            return;
        }
        res.setEncoding('utf-8');
        let body = '';
        res.on('data', data => body += data);
        res.on('end', () => {
            let result = '';
            try {
                result = JSON.parse(body);
            }
            catch (error) {
                callback(error);
            }
            console.log(result);
            if (result.Response === "False") {
                return callback(new Error(`Film not found!`));
            }

            callback(null, result);
        });
    });
    req.on('error', error => callback(error));
}

module.exports = request;