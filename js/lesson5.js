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
    checkTable(surname, name, CreditDB);
}

function checkTable(surname, name, CreditDB) {
    var table = document.getElementById('creditInfo');
    var count = 0;
    for ( var i = 0; i < table.rows.length; i++) {
        if (surname == CreditDB[i][1]) {
            count++;
        }
    }
    if (count < 3) {
        printTable(surname, name, credit, term);
    } else {
        alert('Упс! Перебільшення ліміту виданих кредитів! Більше не можна!:(');
    }
}

var id = 0;
function printTable(surname, name, credit, term) {
    id++;
    CreditDB.push([id,surname,name,credit,term]);

    // audit();
    // var auditArr = [];
    // function audit() {
    //     var table = document.getElementById('creditInfo');
    //     var count = 0;
    //     for ( var j = 0; j < table.rows.length; j++ ) {
    //         if ( surname == CreditDB[j][1] ) {
    //             count++;
    //             console.log (count);
    //             if ( count >= 3 ) {
    //                 alert('Упс! У Вас вже є 3 кредита! Більше не можна!:(');
    //                 // how STOP function printTable(surname, name, credit, term)?;
    //                 // console.log(false);
    //                 auditArr.push(false);
    //                 // return false;
    //             } else {
    //                 // console.log(true);
    //                 auditArr.push(true);
    //                 // return true;
    //             }
    //         } else {
    //             // console.log(true);
    //             auditArr.push(true);
    //             // return true;
    //         }
    //     }
    // }
    // alert (unique(auditArr));
    // var result = [null];
    // function unique(auditArr) {
    //
    //
    //     nextInput:
    //         for (var i = 0; i < auditArr.length; i++) {
    //             var str = auditArr[i];
    //             for (var j = 0; j < result.length; j++) {
    //                 if (result[j] == str) continue nextInput;
    //             }
    //             result.push(str);
    //         }
    //
    //     return result;
    // }
    //
    // for ( var m = 0; m < result.length; m++ ) {
    //     if ( result[m] ) {
    //         printRow();
    //     } else {
    //         alert('Упс! У Вас вже є 3 кредита! Більше не можна!:(');
    //     }
    // }

printRow();
    function printRow() {
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
            tr.addEventListener("click", showPersonalId);
        }
        ele.appendChild(tr);
    }

// //Показує список всіх взятих кредитів
// function showPersonalId() {
//     var surname = (this.cells[1].innerHTML);
//     var name = (this.cells[2].innerHTML);
//     var table = document.getElementById('creditInfo');
//     for ( var i = 0; i < table.rows.length; i++ ) {
//         if ( CreditDB[i][1] == surname && CreditDB[i][2] == name ) {
//             var eleList = document.getElementById('personalInfo');
//             for (var j = 0; j < CreditDB.length; j++ ){
//                 var tr = document.createElement('tr');
//                 var tdId = document.createElement('td');
//                 var tdName = document.createElement('td');
//                 var tdSurname = document.createElement('td');
//                 var tdAmount = document.createElement('td');
//                 var tdTerm = document.createElement('td');
//                 var idShow = document.createTextNode(CreditDB[i][0]);
//                 var nameShow = document.createTextNode(CreditDB[i][1]);
//                 var surnameShow = document.createTextNode(CreditDB[i][2]);
//                 var amoutShow = document.createTextNode(CreditDB[i][3]);
//                 var termShow = document.createTextNode(CreditDB[i][4]);
//                 var tdDebt = document.createElement('td');
//                 var debtShow = document.createTextNode( CreditDB[i][3] * CreditDB[i][4] * 0.04 + CreditDB[i][3] );
//                 tdId.appendChild(idShow);
//                 tdName.appendChild(nameShow);
//                 tdSurname.appendChild(surnameShow);
//                 tdAmount.appendChild(amoutShow);
//                 tdTerm.appendChild(termShow);
//                 tdDebt.appendChild(debtShow);
//                 tr.appendChild(tdId);
//                 tr.appendChild(tdName);
//                 tr.appendChild(tdSurname);
//                 tr.appendChild(tdAmount);
//                 tr.appendChild(tdTerm);
//                 tr.appendChild(tdDebt);
//             }
//             eleList.appendChild(tr);
//         }
//     }

}



