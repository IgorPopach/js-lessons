import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Router from './../../router';

export default class Main extends React.Component{
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