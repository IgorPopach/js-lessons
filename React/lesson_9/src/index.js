import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';
import Router from './router';
import './index.scss';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    
    render(){
        return (
            <div className="container">
            <BrowserRouter>
                <Router>
                    
                </Router>
            </BrowserRouter>
            </div>
        
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));