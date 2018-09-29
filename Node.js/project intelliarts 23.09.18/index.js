const fs = require('fs');
const http = require('http');

const printList = require('./utils/index').printList;

const command = process.argv[2];

switch (command) {
    case '--list': list(); break;
    case '-l': list(); break;
    case '--add': add(); break;
    case '-a': add(); break;
    case '--clear': clear(); break;
    case '-c': clear(); break;
    case '--help': info(); break;
    case '-h': info(); break;
    case '--total': total(); break;
    case '-t': total(); break;
    default:
        console.log('command not found')
}

function add() {
    const date = process.argv[3];
    const amount = process.argv[4];
    const currency = process.argv[5];
    const product = process.argv[6];
    fs.readFile("./expenses.json", (err, list) => {
        if (err) return console.log(err.message);
        let taskList = JSON.parse(list);

        if (!taskList[date]) {
            taskList[date] = [{
                date: date,
                amount: amount,
                currency: currency,
                product: product
            }]
        } else {
            taskList[date].push({
                date: date,
                amount: amount,
                currency: currency,
                product: product
            })
        }
        printList(taskList);

        let saveTask = JSON.stringify(taskList);
        fs.writeFile('./expenses.json', saveTask, err => {
            if (err) return console.log(err.message);
            console.log("task created");
        })
    })
}


function clear() {
    const date = process.argv[3];
    fs.readFile("expenses.json", (err, list) => {
        if (err) return console.log(err.message);
        let taskList = JSON.parse(list);
        taskList = taskList.filter(task => task.date !== date);
        let saveTask = JSON.stringify(taskList);
        fs.writeFile('expenses.json', saveTask, err => {
            if (err) return console.log(err.message);
            console.log("task deleted");
        })
    })
}

function list() {
    fs.readFile("./expenses.json", (err, list) => {
        if (err) return console.log(err.message);
        printList(JSON.parse(list));
    })
}

function total() {
    const currency = process.argv[3].toLocaleUpperCase();
    if (currency.length !== 3) {
        return console.error('Wrong currency!')
    }
    http.get('http://data.fixer.io/api/latest?access_key=fbf0fd672a1396ed4e466b8058f3569e', (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            // TODO: save last currecy into last_rates.json
           const rates =  JSON.parse(data).rates;
           printTotal(rates, currency);
        });

    }).on("error", (err) => {
        // TODO: handle error case
        console.log("Error: " + err.message);
    });

}

function printTotal(rates, currency) {
    fs.readFile("expenses.json", (err, list) => {
        if (err) return console.log(err.message);
        let taskList = JSON.parse(list);
        const totalInEUR = Object.keys(taskList).reduce((acc, key) => {
            return taskList[key].reduce((sum, item) => sum + getAmountInEUR(item, rates), acc);
        }, 0)
        console.log(converToDesireCurrency(totalInEUR, currency, rates))
    })
}

function getAmountInEUR(item, rates) {
    if (item.currency === 'EUR') {
        return parseFloat(item.amount);
    }
    return parseFloat(item.amount) / rates[item.currency];
}

function converToDesireCurrency(totalInEUR, desireCurrency, rates) {
    const convertedValue = totalInEUR * rates[desireCurrency];
    return  convertedValue + ' ' + desireCurrency
}