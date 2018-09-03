// for (var i = 0; i < 5; i++) {
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
// }

// for (let i = 0; i < 5; i++) {
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
// }

const sum = function(a,b) {
    return a + b;
}
console.log(sum(5,10));

const multi = (first, second) => {
    return first * second;
}
console.log(multi(10,2));

const multi2 = (first, second) => first * second; //скорочення у разі return
console.log(multi(10,2));

const div = a => a / 2;
console.log(div(10));

const tests = () => {
    console.log("test")
}
tests();

let arr = [1,2,3,4,5,6,7,8,9];
let result = 0;
arr.forEach(i => result += i);
console.log(result);

const OBJ = {
    name: "Bill",
    // printName(){
    //     setTimeout(() => {
    //         console.log(this.name);
    //     }, 3000);
    // }
    // не працює старий запис функції
    printName(){
        setTimeout(function() {
            console.log("name" + this.name);
        }, 3000);
    }
}

OBJ.printName();

const addNewPerson = (name, surname, hobbi) => {
    return {
        name,
        surname,
        hobbi,
        getHobby() {
            return "Hacker"
        }
    }
}

const person1 = addNewPerson("Bill", "Jonson", "haker",);
console.log(person1.getHobby());
console.log(`Hello, my name  is ${person1.name} ${person1.surname} i'm ${person1.getHobby()}`);

let arr2 = [1,2,3,4,5,6,7,8,9];
for (let item of arr2) {
    console.log(item);
}