import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Content from './components/content/content';

class Main extends React.Component{
    state = {
       
    }
    render(){
        return (
            <div className="container main">
                <Content />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
