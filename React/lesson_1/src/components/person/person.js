import React, {Component} from 'react';
import './person.css';

class Person extends Component {
    render() {
        return (
            <div className = "person">
                <span>Name Bill</span>
                <div></div>
                <span>Hello world!!!</span>
            </div>);
    }
}

export default Person;