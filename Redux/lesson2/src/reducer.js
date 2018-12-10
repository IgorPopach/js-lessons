const initStates = {
    counter: 0
}

export default function Reducer(state = initStates, action) {
    switch (action.type){
        case 'increase' :
            return {
                counter: state.counter + 1
            }
        case 'decrease' :
            return {
                counter: state.counter - 1
            }
        default:
            return state;
    }
}

