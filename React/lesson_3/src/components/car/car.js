import React from 'react';
import './car.css';

class Car extends React.Component{
    render(){
        return (
            <div className="Css">
                <h2>Car:</h2>
                <div className="model">"model": {this.props.model}</div>
                <div className="type">"type": {this.props.type}</div>
                <div className="color">"color": {this.props.color}</div>
                <button onClick={this.props.changeTitle}>Get Car</button>
            </div>
        )
    }
}

export default Car;