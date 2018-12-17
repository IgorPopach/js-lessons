import Counter1 from './reducers/counter1';
import Counter2 from './reducers/counter2';
import Counter5 from './reducers/counter5';
import {combineReducers} from 'redux';
export default combineReducers({
    Counter1, Counter2, Counter5
})