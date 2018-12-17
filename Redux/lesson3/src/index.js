import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reducer from './reducer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
const store = createStore(reducer)
store.subscribe(() => {
    console.log('store', store.getState())
})


const app = (
    <Provider store = {store}>
        <App />
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));


