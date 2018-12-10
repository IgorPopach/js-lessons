import React from 'react';
import ReactDOM from 'react-dom';
import Reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import './index.css';
import App from './App';

const store = createStore(Reducer);

store.subscribe( () => {
    console.log('Store', store.getState())
})
const Main = (
    <Provider store = {store}>
        <App />
    </Provider>
)

ReactDOM.render(Main, document.getElementById('root'));
