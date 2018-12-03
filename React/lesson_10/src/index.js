import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import Main from './components/main/main';

class App extends React.Component{ 
    render(){
        return (
            <div className="container">
            <Main />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));