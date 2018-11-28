import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import ContactUs from './components/contactUs/contactUs';
import Hiw from './components/hiw/hiw';
import Nav from './components/nav/nav';
import NotFound from './components/NotFound/NotFound';

class Router extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <Switch>
                    <Route path="/home" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/contact-us" exact component={ContactUs} />
                    <Route path="/hiw" exact component={Hiw} />
                    <Route component={ NotFound } />
                </Switch>
            </div>
            
        )
    }
}

export default Router;