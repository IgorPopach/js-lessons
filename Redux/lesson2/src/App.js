import React, { Component } from 'react';
import {connect} from 'react-redux';



class App extends Component {
  render() {
    console.log('this.props',this.props)
    return (
      <div className="App">
        <p>Counter: {this.props.counter}</p>
        <button onClick={this.props.onIncrease} >Increase</button>
        <button onClick={this.props.onDecrease} >Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrease: () => {
      dispatch({type: 'increase'})
    },
    onDecrease: () => {
      dispatch({type: 'decrease'})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

