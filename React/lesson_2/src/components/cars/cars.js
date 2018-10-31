import React from 'react';
import CarsStyle from './cars.css';

class Cars extends React.Component {
    render() {
        // const BaseStyle = {
        // 'textAlign': "center",
        // 'fontSize': "18px"
        // }
        // console.log(this.props);
        console.log(CarsStyle);
        return (
            <div className="Cars">
                <div>Model: {this.props.model}</div>
                <div>Type: {this.props.type}</div>
                <div>Engine: {this.props.engine}</div>
                <div>Color: {this.props.color}</div>
                <div>Price: {this.props.price}</div>
            </div>);
    }
}

export default Cars;