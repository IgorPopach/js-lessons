import React, { Component } from 'react';
import './clientForm.css';
import firebase from './../firebase.js';

class ClientForm extends Component {
  render() {
    ShowCreditInfoList();
    // let btnSubmit = document.getElementsByName('submit')[0];
    // btnSubmit.addEventListener('click', getUserInfo);

    function ShowCreditInfoList() {
      // clearCreditInfoList();
      let usersRef = firebase.database().ref("users/");
      usersRef.on("child_added", function(data) {
          let userBase = data.val();
          let ele = document.getElementById('creditList');
          let tr = document.createElement('tr');
          let tdName = document.createElement('td');
          let tdSurname = document.createElement('td');
          let tdAmount = document.createElement('td');
          let tdTerm = document.createElement('td');
          let nameShow = document.createTextNode(userBase.username);
          let surnameShow = document.createTextNode(userBase.surname);
          let amoutShow = document.createTextNode(userBase.amount);
          let termShow = document.createTextNode(userBase.term);
          tdName.appendChild(nameShow);
          tdSurname.appendChild(surnameShow);
          tdAmount.appendChild(amoutShow);
          tdTerm.appendChild(termShow);
          tr.appendChild(tdName);
          tr.appendChild(tdSurname);
          tr.appendChild(tdAmount);
          tr.appendChild(tdTerm);
          ele.appendChild(tr);
          tr.addEventListener('click', getPerson);
      });
    }

    // function clearCreditInfoList() {
    //   let table = document.getElementById('creditList');
    //   while (table.hasChildNodes()) {
    //       table.removeChild(table.firstChild);
    //   }
    // }

    // function getUserInfo() {
    //   let name = document.getElementsByName('clientName')[0].value;
    //   let surname = document.getElementsByName('clientSurname')[0].value;
    //   let amount = document.getElementsByName('amount')[0].value;
    //   let term = document.getElementsByName('term')[0].value;
    //   let count = 0;
    //   let usersRef = firebase.database().ref("users/");
    //   usersRef.on("child_added", function(data) {
    //       let userBase = data.val();
    //       if ( userBase.username === name && userBase.surname === surname) {
    //           count++;
    //       }
    //   });
    //   if (count <= 2) {
    //       writeUserData(name, surname, amount, term);
    //   } else {
    //       alert(`Alert! ${name} ${surname} has 3 Credits!!!`)
    //   }
    // }

    // function writeUserData(name, surname, amount, term) {
    //   let newClientKey = firebase.database().ref().child('users').push().key;
    //   firebase.database().ref('users/' + newClientKey).set({
    //       username: name,
    //       surname: surname,
    //       amount : amount,
    //       term : term
    //   });
    // }

    function getPerson() {
      // clearCreditorInfo();
      let nameList = (this.cells[0].innerHTML);
      let surnameList = (this.cells[1].innerHTML);
      let usersRef = firebase.database().ref("users/");
      usersRef.on("child_added", function(data) {
          let userBase = data.val();
          if (nameList === userBase.username && surnameList === userBase.surname) {
          let amount = +userBase.amount;
          let loan_rate = 3;
          let percent = amount * loan_rate / 100;
          let totalLoan = 0;
          totalLoan = amount + percent;    
          let ele = document.getElementById('creditInfo');
          let tr = document.createElement('tr');
          let tdId = document.createElement('td');
          let tdName = document.createElement('td');
          let tdSurname = document.createElement('td');
          let tdAmount = document.createElement('td');
          let tdTerm = document.createElement('td');
          let tdLoan = document.createElement('td');
          let tdTotallLoan = document.createElement('td');
          let idShow = document.createTextNode(data.key);
          let nameShow = document.createTextNode(userBase.username);
          let surnameShow = document.createTextNode(userBase.surname);
          let amoutShow = document.createTextNode(userBase.amount);
          let termShow = document.createTextNode(userBase.term);
          let loanShow = document.createTextNode(loan_rate + " %");
          let totallLoanShow = document.createTextNode(totalLoan);
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
      });
    }

    // function clearCreditorInfo() {
    //   const table = document.getElementById('creditInfo');
    //   while (table.hasChildNodes()) {
    //       table.removeChild(table.firstChild);
    //   }
    // }
    return (
        <div className="contact-section">
          <div className="container">
            <div>
              <div className="col-md-6 form-line">
                <div className="form-group">
                  <label>Client name</label>
                  <input type="text" className="form-control" name="clientName" placeholder=" Enter Name" required></input>
                </div>
                <div className="form-group">
                  <label>Client surname</label>
                  <input type="text" className="form-control" name="clientSurname"
                    placeholder=" Enter client surname" required></input>
                </div>
                <div className="form-group">
                  <label>Amount</label>
                  <input type="number" className="form-control" name="amount" placeholder=" Enter amount" required></input>
                </div>
                <div className="form-group">
                  <label>Term</label>
                  <input type="number" className="form-control" maxLength="2" min="3" max="12" name="term"
                    placeholder=" Enter term" required></input>
                </div>
                <div>
                  <button type="button" className="btn btn-default submit" name="submit"><i className="fa fa-paper-plane"
                    aria-hidden="true"></i>
                    Send
                            </button>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group scroll">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Amount</th>
                        <th>Term</th>
                      </tr>
                    </thead>
                    <tbody id="creditList">

                    </tbody>
                  </table>
                </div>
              </div>
              <div className="row credit-detail">
                <div className="col-md-12">
                  <div className="form-group">
                    <h3>Credit Detail</h3>
                    <table className="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Surname</th>
                          <th>Amount</th>
                          <th>Term</th>
                          <th>Loan Rate</th>
                          <th>Total Loan</th>
                        </tr>
                      </thead>
                      <tbody id="creditInfo">
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ClientForm;