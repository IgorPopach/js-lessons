function plus (a = 2, b = 3) {
    return a + b;
}
console.log (plus(6));

function showPerson(...args) {
     args.map((item) => {
         console.log(item);
     })
  
}

showPerson("Tom", "Tomson", 29, "email", "male");
showPerson("Bill");



// let arr = [1, "test", 12, 42, "Bill", "Real"];
// arr.map((item) => {
//     console.log(item);
// });