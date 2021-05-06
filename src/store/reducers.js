import { combineReducers } from 'redux';
import watch from './watch/reducer';

const appReducer = combineReducers({
  watch: watch
});

const rootReducer = (state, action) => {
  if (action.type === 'LOG_OUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
