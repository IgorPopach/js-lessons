import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="login-page">
          <div class="section-content">
            <div class="container-fluid">
              <div class="col-8">
                <h1 class="section-header">Get <span class="content-header wow fadeIn " data-wow-delay="0.2s"
                  data-wow-duration="2s"> Money with Best Credit Online</span></h1>
                <h3>24/7 Support. Free games for best clients!</h3>
              </div>
            </div>
          </div>
          <div class="login-section">
            <div class="container">
              <p>Login</p>
              <input type="text" class="login" name="login"></input>
              <p>Password</p>
              <input type="password" class="password" name="password"></input><br></br>
              <input type="button" value="Login" id="login" class="btn-login"></input>
            </div>
          </div>
          <p class="showFalse"></p>
        </div>
      </div>
    );
  }
}
            
export default App;
