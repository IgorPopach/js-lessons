import {Plus_2, Minus_2} from "./../actions/types";

const initState = {
    counter2: 0,
}
export default function reducer(state = initState, action) {
    switch (action.type) {
        case Plus_2:
            return {
                counter2: state.counter2 + 2
            }
        case Minus_2:
            return {
                counter2: state.counter2 - 2
            }
        default:
            return state
    }
}
