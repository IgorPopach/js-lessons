import React, { Component } from 'react';
import './Credit.css';
import PrivatApi from './../privatAPI/privatAPI';
import ClientForm from './../clientForm/clientForm';
import Header from './../header/header';


class Credit extends Component {
  render() {
    (function RenderCreditInfo() {
      // FirebaseInit()
      // let welcome = document.querySelector(".welcome");
      // let name = window.localStorage.getItem('userName');
      // welcome.innerHTML = `Welcome  -  ${name}!`;
      // let btnlogout = document.getElementsByName('logout')[0];
      // btnlogout.addEventListener('click', logout);

  
    })();

    function logout() {
      localStorage.clear();
      window.location.href = "index.html";
    }





    return (
      <div id="contact">
        <div className="section-content">
          <div className="container-fluid">
            <div className="col-8">
              <Header />
              <p className="welcome"></p>
              <input type="button" value="Logout" className="btn-logout" name="logout"></input>
            </div>
            <PrivatApi />
          </div>
        </div>
        <ClientForm />
      </div>
    );
  }
}

export default Credit;