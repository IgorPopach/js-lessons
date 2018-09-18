const fs = require('fs');
const dir = fs.readdirSync(__dirname);
fs.readFile("person1.json", (err, dir) => {
    if (err) throw (err);
    console.log(JSON.parse(dir.toString()).name);
})