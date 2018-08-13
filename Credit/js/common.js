window.addEventListener('load', init(), false);

function init() {
    var btnSubmit = document.getElementsByName('submit')[0];
    btnSubmit.addEventListener('click', getUserInfo);
}

function getUserInfo() {
    var name = document.getElementsByName('clientName')[0].value;
    var surname = document.getElementsByName('clientSurname')[0].value;
    var amount = document.getElementsByName('amount')[0].value;
    var term = document.getElementsByName('term')[0].value;

    SaveToDB(name, surname, amount, term);
}

var CreditDB = [];
var id = 0;

function SaveToDB(name, surname, amount, term) {
    id++;
    CreditDB.push([id, name, surname, amount, term]);

    var ele = document.getElementById('creditList');

    for (var i = 0; i < CreditDB.length; i++) {
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
        tr.addEventListener('click', getPersonID);
    }
    ele.appendChild(tr);

}

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
    // for (var i = 0; i < cash.length; i++) {
    //
    //     document.write(cash[i].ccy + ' / ' + cash[i].base_ccy + ' buy: ' + cash[i].buy + ' sale: ' + cash[i].sale + '<br>');
    // }
}

