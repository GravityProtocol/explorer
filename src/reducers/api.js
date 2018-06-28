import { combineReducers } from 'redux';
import { SET_INITIALIZED } from '../actions/api';

const initialized = (state = false, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  initialized,
});
