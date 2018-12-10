const Redux = require('redux');
const StartState = {
    counter: 0,
}

const reducer = (state=StartState, action) => {
    if( action.type === 'increase' ) {
        return {counter: state.counter + 1}
    } else if ( action.type === 'decrease' ) {
        return {counter: state.counter - 1}
    }
    return state
}

const Store = Redux.createStore(reducer);
Store.subscribe ( () => {
    console.log('Store', Store.getState())
})

const increase = {
    type: 'increase'
}

const decrease = {
    type: 'decrease'
}

Store.dispatch(increase)

Store.dispatch(decrease)
