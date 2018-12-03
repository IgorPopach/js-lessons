import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <ul className="nav nav-tabs nav-justified">
                    <li className="nav-item">
                        <NavLink to="/home" activeClassName="nav-link active">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" activeClassName="nav-link active">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/blog" activeClassName="nav-link active">Blog</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;