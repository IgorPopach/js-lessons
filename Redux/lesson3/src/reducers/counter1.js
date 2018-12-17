import {Plus, Minus} from "./../actions/types";

const initState = {
    counter: 0,
}
export default function reducer(state = initState, action) {
    switch (action.type) {
        case Plus:
            return {
                counter: state.counter + 1
            }
        case Minus:
            return {
                counter: state.counter - 1
            }

        default:
            return state
    }
}
