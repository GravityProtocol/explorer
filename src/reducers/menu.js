import { combineReducers } from 'redux';
import { SHOW_MENU, HIDE_MENU, TOGGLE_MENU } from '../actions/menu';

const active = (state = false, action) => {
  switch (action.type) {
    case SHOW_MENU:
      return true;
    case HIDE_MENU:
      return false;
    case TOGGLE_MENU:
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  active,
});
