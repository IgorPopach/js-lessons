window.addEventListener('load', init(), false);

function init() {
    var fullPath = window.location.pathname;
    if (Router(fullPath) == 'index.html') {
        var login = document.getElementById('login');
        login.addEventListener('click', function read() {
            window.localStorage.setItem('name', 'admin');
            window.localStorage.setItem('password', 'admin');
            var loginName = document.getElementsByName('login')[0].value;
            var loginPassword = document.getElementsByName('password')[0].value;
            var name = window.localStorage.getItem('name');
            var password = window.localStorage.getItem('password');
            if ( loginName == name && loginPassword == password ) {
                document.location.href = "credit.html";
            } else {
                document.getElementsByName('login')[0].value = '';
                document.getElementsByName('password')[0].value = '';
                document.getElementById('showFalse').innerHTML = "Your login or password is incorrect. Please try" +
                    " again";
            }
        }, false);
    } else if (Router(fullPath) == 'credit.html') {
        privatBank();
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
    } else {
        document.location.href = 'https://hakim.se/404';
    }
}

function Router(fullPath){
    var path = fullPath.split("/");
    var lenght = path.length;
    var route = path[lenght -1];
    return route;
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

function privatBank() {
    var xhr = new XMLHttpRequest();
    var url = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";
    xhr.open('GET', url, false);
    xhr.send();
    if (xhr.status != 200) {
        alert(xhr.status + xhr.statusText);
    } else {
        var cash = JSON.parse(xhr.responseText);
        var buy1 = document.getElementById('buy1');
        var sale1 = document.getElementById('sale1');
        var buy2 = document.getElementById('buy2');
        var sale2 = document.getElementById('sale2');
        var buy3 = document.getElementById('buy3');
        var sale3 = document.getElementById('sale3');

        buy1.innerHTML = Math.round(cash[0].buy * 100) / 100;
        sale1.innerHTML = Math.round(cash[0].sale * 100) / 100;
        buy2.innerHTML = Math.round(cash[1].buy * 100) / 100;
        sale2.innerHTML = Math.round(cash[1].sale * 100) / 100;
        buy3.innerHTML = Math.round(cash[2].buy * 1000) / 1000;
        sale3.innerHTML = Math.round(cash[2].sale * 100) / 100;
    }
}


