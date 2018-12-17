import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {PLUS_5, MINUS_5} from './actions/actions';

class Counter5 extends Component {

  render() {
    console.log(this.props)
    return (

      <div>
        <br />
        <button className='plus' onClick={this.props.onPlus5}>Plus 5</button>
        <button className='minus' onClick={this.props.onMinus5}>Minus 5</button>
        <h1>Number: {this.props.counter5}</h1>

        
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state)
  return {
    counter5: state.Counter5.counter5
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlus5: () => {
      dispatch(PLUS_5())
    },
    onMinus5: () => {
      dispatch(MINUS_5())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Counter5);

