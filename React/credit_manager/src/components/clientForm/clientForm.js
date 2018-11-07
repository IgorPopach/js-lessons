import React, { Component } from 'react';
import './clientForm.css';
import firebase from './../firebase.js';
import InputComponent from './../inputComponent/inputComponent';

class ClientForm extends Component {
  render() {
    return (
        <div className="contact-section">
          <div className="container">
            <div>
              <InputComponent />
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