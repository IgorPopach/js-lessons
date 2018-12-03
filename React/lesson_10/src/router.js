import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import BlogList from './components/blogList/blogList';
import Post from './components/post/post';
import Nav from './components/nav/nav';
import NotFound from './components/NotFound/NotFound';

class Router extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/home" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/blog/:id" component={Post} />
                    <Route path="/blog" exact component={BlogList} />
                    <Route component={ NotFound } />
                </Switch>
            </div>
        )
    }
}

export default Router;