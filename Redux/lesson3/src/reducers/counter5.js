import {Plus_5, Minus_5} from "./../actions/types";

const initState = {
    counter5: 0,
}
export default function reducer(state = initState, action) {
    switch (action.type) {
        case Plus_5:
            return {
                counter5: state.counter5 + 5
            }
        case Minus_5:
            return {
                counter5: state.counter5 - 5
            }
        default:
            return state
    }
}
