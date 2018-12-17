import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';
import {PLUS_2, MINUS_2} from './actions/actions';

class Counter extends Component{
    render(){
        return(
            <div>
            <br />
            <button className='plus' onClick={this.props.onPlus2}>Plus 2</button>
            <button className='minus' onClick={this.props.onMinus2}>Minus 2</button>
            <h1>Number: {this.props.counter2}</h1>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state)
  return {
    counter2: state.Counter2.counter2
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlus2: () => {
      dispatch(PLUS_2())
    },
    onMinus2: () => {
      dispatch(MINUS_2())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter);

