// console.log(`Hello World`);
// let obj = require("./module1.js");
// console.log(obj);
// let obj = require("./module1.js");
// const res = obj.sum(5, 10);
// console.log(res);

// const PersonUser = require("./module1.js");
// let Tom = new PersonUser("Tom", "Tompson", 29);
// Tom.showInfo();

// const json = require("./person.json");

// let name = json.name;
// let surname = json.surname;
// let age = json.age;
// console.log(`${name} ${surname} ${age}`);



// console.log(__filename); // глобальна змінна
// console.log(__dirname); // розташування
// console.log(process.execPath);
// console.log(process.version);
// console.log(process.platform);
let stdout = process.stdout;
let stdin = process.stdin;
stdout.write("What is your name?\n");
stdin.on("data", input => {
    let name = input.toString();
    stdout.write(`hello ${name}`);
    process.exit;
})
// console.log(process);

const fs = require('fs'); //вбудований модуль
const dir = fs.readdirSync(__dirname);
// console.log(dir);
// fs.readFile("person.json", (err, dir) => {
//     if (err) throw (err);
//     console.log(dir.toString());
// })
// fs.writeFile("text.txt", "Hello world", err => {
//     if(err) throw (err);
//     console.log("Done");
// })
// fs.appendFile("text.txt", "\nGood bye world", err => {
//     if (err) throw (err);
//     console.log("Append Done");
// })
fs.watch(__dirname,(event, filename) => {
    console.log(event);
    console.log(filename);
})

