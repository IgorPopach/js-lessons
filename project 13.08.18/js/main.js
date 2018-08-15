var Person = {
    constructor: function (name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        console.log(this.constructor);
        return this;
    },
    wellcome: function() {
        document.write(`Hello, i am ${this.name}`);
    }
}
var student = Object.create(Person); // створюємо новий обєкт зі всіма методами Person (наслідування у батьківського обєкту)
student.constructor = function (name, age, gender, subject) {
    Person.constructor.apply(this, arguments);
    this.subject = subject;
    this.study = function() {
        document.write("Can study " + this.subject);
    }
}
// student.constructor("Tom", 24, "male", "IT");
// student.wellcome();
// student.study();
// Person.constructor("Bill", 34, "male");

var programmer = Object.create(student);
programmer.constructor = function (name, age, gender, subject, specials) {
    student.constructor.apply(this, arguments);
    this.specials = specials;
    this.skills = function() {
        document.write(" - Can hard codding with " + this.specials);
    }
}
// programmer.constructor("Igor", 30, "male", "IT", "Angular");
// programmer.wellcome();
// programmer.skills();
// console.log(Person.isPrototypeOf(programmer));// перевіряє наслідування у батьківського обєкта - true


//homework 14.08.18
var Dog = {
    constructor: function (name, age) {
        this.name = name;
        this.age = age;
        return this;
    },
    wellcome: function() {
        document.write(`Hello, i am ${this.name}. I am ${this.age} years old. `);
    }
}
var HunterDog = Object.create(Dog);
HunterDog.constructor = function (name, age, speed) {
    Dog.constructor.apply(this, arguments);
    this.speed = speed;
}
var Taxa = Object.create(HunterDog);
Taxa.constructor = function (name, age, speed, weight) {
    HunterDog.constructor.apply(this, arguments);
    this.weight = weight;
    this.aboutMe = function() {
        document.write(`My speed is ${this.speed} km/h and I have weight - ${this.weight} kg`);
    }
}
Taxa.constructor("Nika", 12, 30, 25);
Taxa.wellcome();
Taxa.aboutMe();
