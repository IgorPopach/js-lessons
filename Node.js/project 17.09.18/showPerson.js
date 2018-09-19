const fs = require('fs');
const dir = fs.readdirSync(__dirname);
fs.readFile("person1.json", (err, dir) => {
    if (err) throw (err);
    let obj = JSON.parse(dir.toString());
    console.log(`\n\nHello ${obj.name} ${obj.surname}!!!\nYour age is ${obj.age}. Ooops...you are so old!:(\n\n`);
})