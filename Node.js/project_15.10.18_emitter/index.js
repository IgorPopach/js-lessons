const eventEmitter = require('events');

// const emitter = new eventEmitter();

// emitter.on('info', getPersonInfo);
// if (true) {
//     emitter.emit('info');
// }

// function Person(name, surname, age) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     console.log(`Name: ${this.name} ${this.surname}, age ${this.age}`)
// }

// function getPersonInfo() {
//     let name = "Bill";
//     let surname = "Gates";
//     let age = 78;
//     Person(name, surname, age);
// }

class Timer extends eventEmitter {
    constructor(totalTime) {
        super();
        this.total = totalTime;
        this.tiks = 0;
    }
    start() {
        this.interval = setInterval(() => this.tik(), 1000);
        this.emit('start');
    }
    tik() {
        this.tiks += 1;
        if(this.tiks <= this.total) {
            this.emit('tik', this.tiks);
        } else {
            this.end();
        }
    }
    end() {
        clearInterval(this.interval);
        this.emit('end');
    }
}

const timer = new Timer(5);
timer.once('start', () => console.log("START!"));
timer.on('tik', tik => console.log(tik));
timer.once('end', () => console.log ("BANG!!!!!"));

timer.start();
