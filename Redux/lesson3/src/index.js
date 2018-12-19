import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reducer from './reducer';
import ReduxThunk from 'redux-thunk';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(ReduxThunk)))
store.subscribe(() => {
    console.log('store', store.getState())
})


const app = (
    <Provider store = {store}>
        <App />
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));


