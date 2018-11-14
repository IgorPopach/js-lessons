import React from 'react';
import Radium from 'radium';
import './header.css'

class Header extends React.Component{
    state = {
        nav:
        [
            {
                label: "Home",
                link: "/"
            },
            {
                label: "About",
                link: "/about"
            },
            {
                label: "Contact",
                link: "/contact"
            }
        ]
    }

    render(){
        const style= {
            fontSize: "20px",
            border: "2px solid yellow",
            borderRadius: "5px",
            textDecoration: "none",
            margin: "15px 10px",
            padding: "6px 10px",
            color: "yellow",
            ":hover": {
                color: "orange",
                border: "2px solid orange",
                transition: ".3s",
                borderShadow: "2px 2px black"
            }
        } 
        return (
            <nav className="nav justify-content-center">
                {this.state.nav.length !== 0  ?
                    this.state.nav.map((e) => {
                        return <a key={e.link} href={e.link} style={style}>{e.label}</a>
                    })
                : <div>Navigation is not exist :(</div>
                }
            </nav>
        )
    }
}

export default Radium(Header);