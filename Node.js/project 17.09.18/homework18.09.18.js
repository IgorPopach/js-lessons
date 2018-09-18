let stdout = process.stdout;
let stdin = process.stdin;
const fs = require('fs');

let questions = [
    "What is your name?",
    "What is your surname?",
    "What is your age?"
];
let answers = [];
function ask(i) {
    stdout.write(`${questions[i]}`);
    stdout.write(` > `)
}
stdin.on("data", data => {
    answers.push(data.toString().trim());
    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers);
        process.exit;  
    }
});

process.on('exit', function() {
    fs.writeFile("person1.json", `{\n "name": "${answers[0]}",\n "surname": "${answers[1]}",\n "age": "${answers[2]}"\n}`, err => {
    if(err) throw (err);
    console.log("data save");
    });
    console.log(answers);
    let obj = require("./showPerson.js");
});

ask(0);
