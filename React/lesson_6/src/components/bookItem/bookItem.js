import React from 'react';
import './bookItem.scss';

class BookItem extends React.Component {
    state= {
        price: 0,
        textCheckbox: "без акції",
        textAction: null,
        isGoing: false,
        BookItem_class: false,
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

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log('shouldComponentUpdate', nextProps, nextState);
    //     if(nextState.price < 2000) {
    //         return true
    //     } else {
    //         console.log('reject');
    //         return false
    //     }
    // }
    // priceRender = () => {
    //     this.setState({price:this.refs.myPrice.value});
    // }

    handleChangeCheck = () => {
        this.setState({isGoing: !this.state.isGoing, BookItem_class: !this.state.BookItem_class});
        if (this.state.isGoing === false) {
            this.setState({textCheckbox: "без акції", textAction: "Акція!!!"})
        } else {
            this.setState({textCheckbox: "акційним", textAction: null})
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', this.state, nextState);
        if (nextState.isGoing !== this.state.isGoing) {
            return true
        } else {
            return false
        }
    }
    render(){
        let BookItem_class = this.state.BookItem_class ? "BookItem BookItem-action" : "BookItem BookItem-default";
        console.log("render <BookItem />");
        return (
            <div className={BookItem_class}>
                <span className="textAction">{this.state.textAction}</span>
                <h2>{this.props.title}</h2>
                <p>{this.props.author}</p>
                <p>{this.props.description}</p>
                {/* <input type="text" ref="myPrice"></input>
                <button type="button" onClick={this.priceRender}>Send</button> */}
                <input name="isGoing" type="checkbox" defaultChecked={this.state.isGoing} onChange={this.handleChangeCheck} />
                <label>Зробити {this.state.textCheckbox}</label>
            </div>
        )
    }
}

export default BookItem;