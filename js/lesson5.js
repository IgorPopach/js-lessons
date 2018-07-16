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
var count = 0;
function printTable(surname, name, credit, term) {
    id++;
    CreditDB.push([id,surname,name,credit,term]);
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

    var table = document.getElementById('creditInfo');
    for ( var j = 0; j < table.rows.length; j++ ) {
        if ( surname == CreditDB[j][1] ) {
            count++;
            console.log (count);
            if ( count - 1 == 3 ) {
                alert('Упс! У Вас вже є 3 кредита! Більше не можна!:(');
            }
        }
    }


    // var table = document.getElementById('creditInfo');
    // for ( var k = 0; k < table.rows.length; k++ ) {
    //     for ( var j = 0; j < table.rows.length; j++ ) {
    //         if ( k != j && CreditDB[k][1] == CreditDB[j][1] && CreditDB[k][2] == CreditDB[j][2] ) {
    //             count++;
    //             console.log(count);
    //             if ( count = 8 ) {
    //                 alert ('Упс! У Вас вже є 3 кредита! Більше не можна!:(');
    //                 break;
    //             }
    //         }
    //     }
    // }
    ele.appendChild(tr);
}

function showPersonalId() {
    var surname = (this.cells[1].innerHTML);
    var name = (this.cells[2].innerHTML);
    var table = document.getElementById('creditInfo');
    for ( var i = 0; i < table.rows.length; i++ ) {
        if ( CreditDB[i][1] == surname && CreditDB[i][2] == name ) {
            var eleList = document.getElementById('personalInfo');
            for (var j = 0; j < CreditDB.length; j++ ){
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
                var tdDebt = document.createElement('td');
                var debtShow = document.createTextNode( CreditDB[i][3] * CreditDB[i][4] * 0.04 );
                tdId.appendChild(idShow);
                tdName.appendChild(nameShow);
                tdSurname.appendChild(surnameShow);
                tdAmount.appendChild(amoutShow);
                tdTerm.appendChild(termShow);
                tdDebt.appendChild(debtShow);
                tr.appendChild(tdId);
                tr.appendChild(tdName);
                tr.appendChild(tdSurname);
                tr.appendChild(tdAmount);
                tr.appendChild(tdTerm);
                tr.appendChild(tdDebt);
            }
            eleList.appendChild(tr);
        }
    }

}



