import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Person from './components/person/person';
import Panda from './components/panda/Panda';

ReactDOM.render(<Panda />, document.querySelector('.panda-image'));
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Person />, document.getElementById('person'));
ReactDOM.render(<Person />, document.querySelector('.person'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
