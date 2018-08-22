window.addEventListener('load', init(), false);

function init() {
    var login = document.getElementById('login');
    login.addEventListener('click', function read() {
        // window.localStorage.setItem('name', 'admin');
        // window.localStorage.setItem('password', 'admin');
        var loginName = document.getElementsByName('login')[0].value;
        var loginPassword = document.getElementsByName('password')[0].value;
        var name = window.localStorage.getItem('name');
        var password = window.localStorage.getItem('password');
        if ( loginName == name && loginPassword == password ) {
            document.location.href = "index.html";
        }
        console.log(name, surname);
    }, false);


    var btnSubmit = document.getElementsByName('submit')[0];
    btnSubmit.addEventListener('click', getUserInfo);
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyA7LH_5VxEd477lNc2ReiMnnjTDWGqf_qo",
        authDomain: "credit-manager-dd2e6.firebaseapp.com",
        databaseURL: "https://credit-manager-dd2e6.firebaseio.com",
        projectId: "credit-manager-dd2e6",
        storageBucket: "",
        messagingSenderId: "687297724044"
    };
    firebase.initializeApp(config); // ініціалізуємо firebase

}



function getUserInfo() {
    var name = document.getElementsByName('clientName')[0].value;
    var surname = document.getElementsByName('clientSurname')[0].value;
    var amount = document.getElementsByName('amount')[0].value;
    var term = document.getElementsByName('term')[0].value;
    writeUserData(name, surname, amount, term);
}

function writeUserData(name, surname, amount, term) {
    var newClientKey = firebase.database().ref().child('users').push().key;
    firebase.database().ref('users/' + newClientKey).set({
        username: name,
        surname: surname,
        amount : amount,
        term : term
    });

    // firebase.database().ref('users').once('value', function(snap){
    //     printUsers(snap.val());
    // });

    var usersRef = firebase.database().ref("users/");
    clearCreditorInfo();
    usersRef.on("child_added", function(data) {
        var newUser = data.val();
        var ele = document.getElementById('creditList');
        var tr = document.createElement('tr');
        var tdId = document.createElement('td');
        var tdName = document.createElement('td');
        var tdSurname = document.createElement('td');
        var tdAmount = document.createElement('td');
        var tdTerm = document.createElement('td');
        var idShow = document.createTextNode(data.key);
        var nameShow = document.createTextNode(newUser.username);
        var surnameShow = document.createTextNode(newUser.surname);
        var amoutShow = document.createTextNode(newUser.amount);
        var termShow = document.createTextNode(newUser.term);
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
        ele.appendChild(tr);
        tr.addEventListener('click', getPersonID);

        console.log("name: " + newUser.username);
        console.log("surname: " + newUser.surname);
        console.log("amount: " + newUser.amount);
        console.log("term: " + newUser.term);
    });
}

function clearCreditorInfo() {
    var table = document.getElementById('creditList');
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }
}
// var CreditDB = [];
// var id = 0;

// function SaveToDB(name, surname, amount, term) {
//
//     id++;
//     CreditDB.push([id, name, surname, amount, term]);
//     var ele = document.getElementById('creditList');
//
//
//     for (var i = 0; i < CreditDB.length; i++) {
//         var tr = document.createElement('tr');
//         var tdId = document.createElement('td');
//         var tdName = document.createElement('td');
//         var tdSurname = document.createElement('td');
//         var tdAmount = document.createElement('td');
//         var tdTerm = document.createElement('td');
//         var idShow = document.createTextNode(CreditDB[i][0]);
//         var nameShow = document.createTextNode(CreditDB[i][1]);
//         var surnameShow = document.createTextNode(CreditDB[i][2]);
//         var amoutShow = document.createTextNode(CreditDB[i][3]);
//         var termShow = document.createTextNode(CreditDB[i][4]);
//         tdId.appendChild(idShow);
//         tdName.appendChild(nameShow);
//         tdSurname.appendChild(surnameShow);
//         tdAmount.appendChild(amoutShow);
//         tdTerm.appendChild(termShow);
//         tr.appendChild(tdId);
//         tr.appendChild(tdName);
//         tr.appendChild(tdSurname);
//         tr.appendChild(tdAmount);
//         tr.appendChild(tdTerm);
//         tr.addEventListener('click', getPersonID);
//     }
//     ele.appendChild(tr);
// }

function getPersonID() {
    var currentClientID = this;
    var id = currentClientID.firstChild.innerHTML;
    showCreditDetail(id);
}

function showCreditDetail(id) {
    var viewID = id;
    id -= 1;
    var loan_rate = 3;
    var amount = CreditDB[id][3];
    var term = CreditDB[id][4];
    var percent = amount * loan_rate / 100;
    console.log("Percent " + percent);
    var totalLoan = 0;
    totalLoan = amount + percent;

    var ele = document.getElementById('creditInfo');
    var tr = document.createElement('tr');
    var tdId = document.createElement('td');
    var tdName = document.createElement('td');
    var tdSurname = document.createElement('td');
    var tdAmount = document.createElement('td');
    var tdTerm = document.createElement('td');
    var tdLoan = document.createElement('td');
    var tdTotallLoan = document.createElement('td');
    var idShow = document.createTextNode(viewID);
    var nameShow = document.createTextNode(CreditDB[id][1]);
    var surnameShow = document.createTextNode(CreditDB[id][2]);
    var amoutShow = document.createTextNode(CreditDB[id][3]);
    var termShow = document.createTextNode(CreditDB[id][4]);
    var loanShow = document.createTextNode(loan_rate + " %");
    var totallLoanShow = document.createTextNode(totalLoan);
    tdId.appendChild(idShow);
    tdName.appendChild(nameShow);
    tdSurname.appendChild(surnameShow);
    tdAmount.appendChild(amoutShow);
    tdTerm.appendChild(termShow);
    tdLoan.appendChild(loanShow);
    tdTotallLoan.appendChild(totallLoanShow);
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdSurname);
    tr.appendChild(tdAmount);
    tr.appendChild(tdTerm);
    tr.appendChild(tdLoan);
    tr.appendChild(tdTotallLoan);
    ele.appendChild(tr);
}


var xhr = new XMLHttpRequest();
var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
xhr.open('GET', url, false);
xhr.send();
if (xhr.status != 200) {
    alert(xhr.status + xhr.statusText);
} else {
    var cash = JSON.parse(xhr.responseText);
    var rate = document.getElementById('Rates');

    rate.innerHTML = cash[0].buy;

}

