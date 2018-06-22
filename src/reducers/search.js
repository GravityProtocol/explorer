import { combineReducers } from 'redux';
import { ENABLE_SEARCH, DISABLE_SEARCH } from '../actions/search';

const active = (state = false, action) => {
  switch (action.type) {
    case ENABLE_SEARCH:
      return true;
    case DISABLE_SEARCH:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  active,
});
