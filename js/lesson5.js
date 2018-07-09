// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>');
// }



// var arr = Array(1, 'Test', true, 12);
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>')
// }


// var days = 'Понеділок,Вівторок,Середа';
// var arr = days.split(',');
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>');
// }

var arr = ['Понеділок', 'Вівторок', 'Середа'];
// var str = arr.join(':');
// document.write(str);

// arr.push('Четвер');
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>');
// }

// arr.pop();
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>');
// }

// arr.shift();
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>');
// }
//
// arr.unshift('Неділя');
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>');
// }


// var index = arr.indexOf('Вівторок');
// console.log(index);
// arr.splice(index,1);
//
//
// arr[index] = 0;
// for (var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + '<br>');
// }



// var arrCopy = arr.slice();
//
// for (var i = 0; i < arrCopy.length; i++) {
//     document.write(arrCopy[i] + '<br>');
// }

var credit1 = [];
var arr = [];
document.addEventListener("load",Init());
function Init() {
    var btn = document.getElementsByClassName("check")[0];
    btn.addEventListener("click", getForm);
}

function getForm() {
    var surname = document.getElementsByName('surname')[0].value;
    console.log(surname);
    var name = document.getElementsByName("name")[0].value;
    console.log(name);
    var credit = document.getElementsByName("credit")[0].value;
    console.log(credit);
    var term = document.getElementsByName("term")[0].value;
    console.log(term);
    credit1 = [surname,name,credit,term];
    console.log(credit1);
}
for (var i = 0; i < credit1.length; i++) {
    arr.push(credit1[i][0]);
    arr.push(credit1[i][1]);
    arr.push(credit1[i][2]);
    arr.push(credit1[i][3]);
    console.log(arr);
}
