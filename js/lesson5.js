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

var CreditDB = [];
window.addEventListener("load",Init());
function Init() {
    var btn = document.getElementsByClassName("check")[0];
    btn.addEventListener("click", getForm);
}

function getForm() {
    var surname = document.getElementsByName('surname')[0].value;
    var name = document.getElementsByName("name")[0].value;
    var credit = document.getElementsByName("credit")[0].value;
    var term = document.getElementsByName("term")[0].value;
    printTable(surname, name, credit, term);
}

var id = 0;
function printTable(surname, name, credit, term) {
    id++;
    CreditDB.push([surname,name,credit,term]);
    var ele = document.getElementById('creditInfo');
    for (var i = 0; i < CreditDB.length; i++ ){
        var tr = document.createElement('tr');
        var tdId = document.createElement('td');
        var tdName = document.createElement('td');
        var tdSurname = document.createElement('td');
        var tdAmount = document.createElement('td');
        var tdTerm = document.createElement('td');
        var idShow = document.createTextNode(CreditDB[i][0]);
        var nameShow = document.createTextNode(CreditDB[i][1]);
        var surnameShow = document.createTextNode(CreditDB[i][2]);
        var amoutShow = document.createTextNode(CreditDB[i][3]);
        var termShow = document.createTextNode(CreditDB[i][4]);
        tdId.appendChild(idShow);
        tdName.appendChild(nameShow);
        tdSurname.appendChild(surnameShow);
        tdAmount.appendChild(amoutShow);
        tdTerm.appendChild(termShow);
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdSurname);
        tr.appendChild(tdAmount);
        tr.appendChild(tdTerm);
        tr.addEventListener("click", showPersonal);
    }
    ele.appendChild(tr);
}

function showPersonal() {
    alert(this.previousElementSibling.innerHTML);
}



