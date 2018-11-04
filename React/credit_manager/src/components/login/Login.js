import React, { Component } from 'react';
import './Login.css';
import Header from './../header/header';

class Login extends Component {
  render() {
    return (
      <div classNameName="Login">
        <div id="login-page">
          <div className="section-content">
            <div className="container-fluid">
              <div className="col-8">
              <Header />
              </div>
            </div>
          </div>
          <div className="login-section">
            <div className="container">
              <p>Login</p>
              <input type="text" className="login" name="login"></input>
              <p>Password</p>
              <input type="password" className="password" name="password"></input><br></br>
              <input type="button" value="Login" id="login" className="btn-login"></input>
            </div>
          </div>
          <p className="showFalse"></p>
        </div>
      </div>
    );
  }
}
            
export default Login;