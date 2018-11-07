import React, { Component } from 'react';
import './privatAPI.css';

class PrivatApi extends Component {
  render() {
    // privatBank("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5")
    // .then(currencies => addCash(currencies))
    // .catch(
    //     err => console.log(err)
    // );

    // function privatBank(url) {
    //   return new Promise(function(resolve,reject) {
    //       let xhr = new XMLHttpRequest();
    //       xhr.open('GET', url, false);
    //       xhr.onload = function(){
    //           if (xhr.status === 200) {
    //               let currencies = JSON.parse(xhr.responseText);
    //               resolve(currencies);
    //           } else {
    //               reject(xhr.statusText);
    //           }
    //       };
    //       xhr.send();
    //   });
    // }

    // function addCash(currencies) {
    //   let buy1 = document.getElementById('buy1');
    //   let sale1 = document.getElementById('sale1');
    //   let buy2 = document.getElementById('buy2');
    //   let sale2 = document.getElementById('sale2');
    //   let buy3 = document.getElementById('buy3');
    //   let sale3 = document.getElementById('sale3');
  
    //   buy1.innerHTML = Math.round(currencies[0].buy * 100) / 100;
    //   sale1.innerHTML = Math.round(currencies[0].sale * 100) / 100;
    //   buy2.innerHTML = Math.round(currencies[1].buy * 100) / 100;
    //   sale2.innerHTML = Math.round(currencies[1].sale * 100) / 100;
    //   buy3.innerHTML = Math.round(currencies[2].buy * 1000) / 1000;
    //   sale3.innerHTML = Math.round(currencies[2].sale * 100) / 100;
    // }

    return (
      <div className="ExchangeRates">
        <p>Exchange Rates:</p>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Buy </th>
              <th>Sale </th>
            </tr>
          </thead>
          <tbody id="Rates">
            <tr>
              <td>USD / UAH</td>
              <td id="buy1">0</td>
              <td id="sale1">0</td>
            </tr>
            <tr>
              <td>EUR / UAH</td>
              <td id="buy2">0</td>
              <td id="sale2">0</td>
            </tr>
            <tr>
              <td>RUR / UAH</td>
              <td id="buy3">0</td>
              <td id="sale3">0</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PrivatApi;