import React from 'react';
import './bookItem.scss';

class BookItem extends React.Component {
    state= {
        price: 0,
    }
    componentDidMount(){
        console.log('componentDidMount');
    }
    componentWillMount(){
        console.log('componentWillMount');
    }
    componentWillReceiveProps(nextProps){
        console.log('componentWillRecievProps', nextProps);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        if(nextState.price < 2000) {
            return true
        } else {
            console.log('reject');
            return false
        }
    }
    priceRender = () => {
        this.setState({price:this.refs.myPrice.value});
    }
    render(){
        console.log("render <BookItem />");
        return (
            <div className="BookItem">
                <h2>{this.props.title}</h2>
                <p>{this.props.author}</p>
                <p>{this.props.description}</p>
                <input type="text" ref="myPrice"></input>
                <button type="button" onClick={this.priceRender}>Send</button>
            </div>
        )
    }
}

export default BookItem;