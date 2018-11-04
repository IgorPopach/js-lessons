window.addEventListener('load', init(), false);

function init() {
    let fullPath = window.location.pathname;
    Router(fullPath);
}

function Router(fullPath) {
    let path = fullPath.split("/");
    let lenght = path.length;
    let route = path[lenght - 1];

    switch (route) {
        case "index.html":
            RenderIndex();
            break;
        case "creditinfo.html":
            RenderCreditInfo();
            break;
        default:
            Render404();
            break;
    }
    
}

function Auth() {
    let validUser = "admin";
    let validPassword = "admin";

    let userName = document.querySelector('.login').value;
    let password = document.querySelector('.password').value;

    if (validUser === userName && validPassword === password){
        console.log("Success!");
        window.localStorage.setItem("userName", userName);
        window.localStorage.setItem("logged", true);
        window.location.href = "creditinfo.html";
    }
    else{
        document.getElementsByName('login')[0].value = '';
        document.getElementsByName('password')[0].value = '';
        let error = document.querySelector(".showFalse");
        error.innerHTML = "Your login or password is incorrect. Please try" +
        " again";
    }
}

function RenderIndex() {
    console.log("Render index");

    if (window.localStorage.getItem("logged") === true){
        window.location.href = "creditinfo.html";
    }

    let btnLogin = document.querySelector('.btn-login');
    btnLogin.addEventListener('click', Auth, false);

}


function Render404() {
    window.location.href = "https://hakim.se/404";
}

// function RenderCreditInfo() {
//     // privatBank("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
//     // .then(currencies => addCash(currencies))
//     // .catch(
//     //     err => console.log(err)
//     // );
//     FirebaseInit()
//     ShowCreditInfoList();
//     let welcome = document.querySelector(".welcome");
//     let name = window.localStorage.getItem('userName');
//     welcome.innerHTML = `Welcome  -  ${name}!`;
//     let btnlogout = document.getElementsByName('logout')[0];
//     btnlogout.addEventListener('click', logout);
//     let btnSubmit = document.getElementsByName('submit')[0];
//     btnSubmit.addEventListener('click', getUserInfo);

// }



// function ShowCreditInfoList() {
//     clearCreditInfoList();
//     let usersRef = firebase.database().ref("users/");
//     usersRef.on("child_added", function(data) {
//         let userBase = data.val();
//         let ele = document.getElementById('creditList');
//         let tr = document.createElement('tr');
//         let tdName = document.createElement('td');
//         let tdSurname = document.createElement('td');
//         let tdAmount = document.createElement('td');
//         let tdTerm = document.createElement('td');
//         let nameShow = document.createTextNode(userBase.username);
//         let surnameShow = document.createTextNode(userBase.surname);
//         let amoutShow = document.createTextNode(userBase.amount);
//         let termShow = document.createTextNode(userBase.term);
//         tdName.appendChild(nameShow);
//         tdSurname.appendChild(surnameShow);
//         tdAmount.appendChild(amoutShow);
//         tdTerm.appendChild(termShow);
//         tr.appendChild(tdName);
//         tr.appendChild(tdSurname);
//         tr.appendChild(tdAmount);
//         tr.appendChild(tdTerm);
//         ele.appendChild(tr);
//         tr.addEventListener('click', getPerson);
//     });
// }

// function logout() {
//     localStorage.clear();
//     window.location.href = "index.html";
// }
// function getUserInfo() {
//     let name = document.getElementsByName('clientName')[0].value;
//     let surname = document.getElementsByName('clientSurname')[0].value;
//     let amount = document.getElementsByName('amount')[0].value;
//     let term = document.getElementsByName('term')[0].value;
//     let count = 0;
//     let usersRef = firebase.database().ref("users/");
//     usersRef.on("child_added", function(data) {
//         let userBase = data.val();
//         if ( userBase.username == name && userBase.surname == surname) {
//             count++;
//         }
//     });
//     if (count <= 2) {
//         writeUserData(name, surname, amount, term);
//     } else {
//         alert(`Alert! ${name} ${surname} has 3 Credits!!!`)
//     }
// }

// function writeUserData(name, surname, amount, term) {
//     let newClientKey = firebase.database().ref().child('users').push().key;
//     firebase.database().ref('users/' + newClientKey).set({
//         username: name,
//         surname: surname,
//         amount : amount,
//         term : term
//     });
// }

// function clearCreditInfoList() {
//     let table = document.getElementById('creditList');
//     while (table.hasChildNodes()) {
//         table.removeChild(table.firstChild);
//     }
// }

// function clearCreditorInfo() {
//     let table = document.getElementById('creditInfo');
//     while (table.hasChildNodes()) {
//         table.removeChild(table.firstChild);
//     }
// }

// function getPerson() {
//     clearCreditorInfo();
//     let nameList = (this.cells[0].innerHTML);
//     let surnameList = (this.cells[1].innerHTML);
//     let usersRef = firebase.database().ref("users/");
//     usersRef.on("child_added", function(data) {
//         let userBase = data.val();
//         if (nameList === userBase.username && surnameList === userBase.surname) {
//         let amount = +userBase.amount;
//         let loan_rate = 3;
//         let percent = amount * loan_rate / 100;
//         let totalLoan = 0;
//         totalLoan = amount + percent;    
//         let ele = document.getElementById('creditInfo');
//         let tr = document.createElement('tr');
//         let tdId = document.createElement('td');
//         let tdName = document.createElement('td');
//         let tdSurname = document.createElement('td');
//         let tdAmount = document.createElement('td');
//         let tdTerm = document.createElement('td');
//         let tdLoan = document.createElement('td');
//         let tdTotallLoan = document.createElement('td');
//         let idShow = document.createTextNode(data.key);
//         let nameShow = document.createTextNode(userBase.username);
//         let surnameShow = document.createTextNode(userBase.surname);
//         let amoutShow = document.createTextNode(userBase.amount);
//         let termShow = document.createTextNode(userBase.term);
//         let loanShow = document.createTextNode(loan_rate + " %");
//         let totallLoanShow = document.createTextNode(totalLoan);
//         tdId.appendChild(idShow);
//         tdName.appendChild(nameShow);
//         tdSurname.appendChild(surnameShow);
//         tdAmount.appendChild(amoutShow);
//         tdTerm.appendChild(termShow);
//         tdLoan.appendChild(loanShow);
//         tdTotallLoan.appendChild(totallLoanShow);
//         tr.appendChild(tdId);
//         tr.appendChild(tdName);
//         tr.appendChild(tdSurname);
//         tr.appendChild(tdAmount);
//         tr.appendChild(tdTerm);
//         tr.appendChild(tdLoan);
//         tr.appendChild(tdTotallLoan);
//         ele.appendChild(tr);
//         }
//     });
// }

// function privatBank(url) {
//     return new Promise(function(resolve,reject) {
//         let xhr = new XMLHttpRequest();
//         xhr.open('GET', url, false);
//         xhr.onload = function(){
//             if (xhr.status == 200) {
//                 let currencies = JSON.parse(xhr.responseText);
//                 resolve(currencies);
//             } else {
//                 reject(xhr.statusText);
//             }
//         };
//         xhr.send();
//     });
// }

// function addCash(currencies) {
//     let buy1 = document.getElementById('buy1');
//     let sale1 = document.getElementById('sale1');
//     let buy2 = document.getElementById('buy2');
//     let sale2 = document.getElementById('sale2');
//     let buy3 = document.getElementById('buy3');
//     let sale3 = document.getElementById('sale3');

//     buy1.innerHTML = Math.round(currencies[0].buy * 100) / 100;
//     sale1.innerHTML = Math.round(currencies[0].sale * 100) / 100;
//     buy2.innerHTML = Math.round(currencies[1].buy * 100) / 100;
//     sale2.innerHTML = Math.round(currencies[1].sale * 100) / 100;
//     buy3.innerHTML = Math.round(currencies[2].buy * 1000) / 1000;
//     sale3.innerHTML = Math.round(currencies[2].sale * 100) / 100;
// }

// function FirebaseInit(){
// // Initialize Firebase
// let config = {
//     apiKey: "AIzaSyA7LH_5VxEd477lNc2ReiMnnjTDWGqf_qo",
//     authDomain: "credit-manager-dd2e6.firebaseapp.com",
//     databaseURL: "https://credit-manager-dd2e6.firebaseio.com",
//     projectId: "credit-manager-dd2e6",
//     storageBucket: "",
//     messagingSenderId: "687297724044"
// };
// firebase.initializeApp(config); // ініціалізуємо firebase
// }
