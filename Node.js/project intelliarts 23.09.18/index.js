const command = process.argv[2];
const date = process.argv[3];
const amount = process.argv[4];
const currency = process.argv[5];
const product = process.argv[6];
const fs = require('fs');

switch(command) {
    case '--test': test(); break;
    case '--list': list(); break;
    case '-l': list(); break;
    case '--add': add(date, amount, currency, product); break;
    case '-a': add(date, amount, currency, product); break;
    case '--clear': clear(date); break;
    case '-c': clear(date); break;
    case '--help': info(); break;
    case '-h': info(); break;
    case '--total': total(currency); break;
    case '-t': total(currency); break;
    default:
    console.log('command not found')
}

function list(){
    fs.readFile("expenses.json", (err,list) => {
        let i = 0;
        let currentDate;
        if(err) return console.log(err.message);
        const taskList = JSON.parse(list);
        taskList.forEach(task => {
            let dateQ = task.date;
            console.log(task.date);
            if(dateQ == task.date) {
                i += 1;
                console.log(i );
                console.log("True");
            }
        // console.log(`  ${task.date}\n  ${task.product} ${task.amount} ${task.currency}\n`)
        });
    })
}

function test(date) {
    // fs.readFile("expenses.json", (err, list) => {
    //     if (err) return console.log(err.message);
    //     // let taskList = JSON.parse(list);
        
    //     // taskList.push({obj});
    //     // obj.amount = amount;
    //     // obj.currency = currency;
    //     // obj.product = product;
    //     // // let saveTask = JSON.stringify(taskList);
    //     // console.log(taskList);
    //     // fs.writeFile('expenses.json', saveTask, err => {
    //     //     if(err) return console.log(err.message);
    //     //     console.log("task created");
    //     // })
    // })
}

function add(date, amount, currency, product) {
    fs.readFile("expenses.json", (err, list) => {
        if (err) return console.log(err.message);
        let taskList = JSON.parse(list);
        taskList.push({date,amount, currency, product});
        taskList.sort(sortDate = (a,b) => Date.parse(b.date) - Date.parse(a.date));
        let saveTask = JSON.stringify(taskList);
        fs.writeFile('expenses.json', saveTask, err => {
            if(err) return console.log(err.message);
            console.log("task created");
        })
    })
}

function clear(date) {
    fs.readFile("expenses.json", (err, list) => {
        if (err) return console.log(err.message);
        let taskList = JSON.parse(list);
        taskList = taskList.filter(task => task.date !== date);
        let saveTask = JSON.stringify(taskList);
        fs.writeFile('expenses.json', saveTask, err => {
            if(err) return console.log(err.message);
            console.log("task deleted");
        })
    })
}

// function info() {
//     console.log(`You can use methods:\n\n '--list' or '-l' - show list(node index --list)\n '--create' or '-c'` + 
//     `- create new object(node index --create 'title' 'desc' 'time')\n '--remove' or '-r' - remove object (node index --remove title)`)
// }

// function list() {
//     fs.readFile("expenses.json", (err,list) => {
//         if(err) return console.log(err.message);
//         let taskList = JSON.parse(list);
//         taskList = taskList.find(task => task.date == date);
//         console.log(`${taskList.title}`);
//     })
// }
