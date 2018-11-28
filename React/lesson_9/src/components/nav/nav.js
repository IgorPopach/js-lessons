import React from 'react';
import {NavLink} from 'react-router-dom';

class Nav extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <li>
                        <NavLink to="/home" activeClassName='activeStyle'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName='activeStyle'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact-us"  activeClassName='activeStyle'>Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/hiw"  activeClassName='activeStyle'>HiW</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav;