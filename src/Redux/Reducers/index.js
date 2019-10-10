import { combineReducers } from 'redux';

import action from './actionReducer';
import searchRobots from './searchReducer';

const rootReducer = combineReducers({
  action,
  searchRobots

});

export default rootReducer;