import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

// Provider, useSelector, useDispatcher

export default rootReducer;