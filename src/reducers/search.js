import { combineReducers } from 'redux';
import {
  ENABLE_SEARCH,
  DISABLE_SEARCH,
  SET_QUERY,
  SET_NOT_FOUND_MESSAGE_VISIBLE,
} from '../actions/search';

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

const query = (state = '', action) => {
  switch (action.type) {
    case SET_QUERY:
      return action.data;
    default:
      return state;
  }
};

const notFoundMessageVisible = (state = false, action) => {
  switch (action.type) {
    case SET_NOT_FOUND_MESSAGE_VISIBLE:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  active, query, notFoundMessageVisible,
});
