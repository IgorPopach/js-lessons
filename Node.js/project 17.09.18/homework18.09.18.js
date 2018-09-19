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
        fs.writeFile("person1.json", `{\n "name": "${answers[0]}",\n "surname": "${answers[1]}",\n "age": "${answers[2]}"\n}`, err => {
            if(err) throw (err);
            console.log("\nOmg!!! O_o\nYour data save!!!\n");
            process.exit();
        })
    }
});
process.on('exit', function() {
    stdout.write(`Now you can see your info!!! Just input - node showPerson\n`);
});

ask(0);