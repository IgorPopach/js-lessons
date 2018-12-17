import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from './counter';
import Counter5 from './counter5';
import './App.css';
import {PLUS, MINUS} from './actions/actions'; 

class App extends Component {

  render() {
    console.log(this.props)
    return (

      <div>
        <br />
        <button className='plus' onClick={this.props.onPlus}>Plus 1</button>
        <button className='minus' onClick={this.props.onMinus}>Minus 1</button>
        <h1>Number: {this.props.counter}</h1>

        <Counter />
        <Counter5 />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log("mapStateToProps", state)
  return {
    counter: state.Counter1.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onPlus: () => {
      dispatch(PLUS())
    },
    onMinus: () => {
      dispatch(MINUS())
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

