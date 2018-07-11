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

// var arr = ['Понеділок', 'Вівторок', 'Середа'];
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
    var name = document.getElementsByName("name")[0].value;
    var credit = document.getElementsByName("credit")[0].value;
    var term = document.getElementsByName("term")[0].value;
    credit1.push([surname,name,credit,term]);
    console.log(credit1);
    name.innerHTML('Позичальник:' + credit1[0][0] + ' ' + credit1[0][1]);
}

for (var i = 0; i < 3; i++) {
    arr[i] = credit1;
    // console.log(arr);
}

