const command = process.argv[2];
const title = process.argv[3];
const desc = process.argv[4];
const time = process.argv[5];
const fs = require('fs');

switch(command) {
    case '--list': list(); break;
    case '-l': list(); break;
    case '--create': create(title, desc, time); break;
    case '-c': create(title, desc, time); break;
    case '--remove': remove(title); break;
    case '-r': remove(title); break;
    case '--help': info(); break;
    case '-h': info(); break;
    case '--view': view(title); break;
    case '-v': view(title); break;
    default:
    console.log('command not found')
}

function list(){
    fs.readFile("db.json", (err,list) => {
        if(err) return console.log(err.message);
        const taskList = JSON.parse(list);
        taskList.forEach((task, index) => {
        console.log(`${index + 1} ${task.title}`)
        });
    })
}


function create(title, desc, time) {
    fs.readFile("db.json", (err, list) => {
        if (err) return console.log(err.message);
        let taskList = JSON.parse(list);
        taskList.push({title, desc, time});
        let saveTask = JSON.stringify(taskList);
        fs.writeFile('db.json', saveTask, err => {
            if(err) return console.log(err.message);
            console.log("task created");
        })
    })
}

function remove(title) {
    fs.readFile("db.json", (err, list) => {
        if (err) return console.log(err.message);
        let taskList = JSON.parse(list);
        taskList = taskList.filter(task => task.title !== title);
        let saveTask = JSON.stringify(taskList);
        fs.writeFile('db.json', saveTask, err => {
            if(err) return console.log(err.message);
            console.log("task deleted");
        })
    })
}

function info() {
    console.log(`You can use methods:\n\n '--list' or '-l' - show list(node index --list)\n '--create' or '-c'` + 
    `- create new object(node index --create 'title' 'desc' 'time')\n '--remove' or '-r' - remove object (node index --remove title)`)
}

function view(title) {
    fs.readFile("db.json", (err,list) => {
        if(err) return console.log(err.message);
        let taskList = JSON.parse(list);
        taskList = taskList.find(task => task.title == title);
        console.log(`${taskList.title}`);
    })
}
