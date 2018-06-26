import { combineReducers } from 'redux';
import {
  SET_SCREEN_TYPE,
  SET_SCROLL_ACTIVE,
  SET_BLOCKED,
  getScreenType,
} from '../actions/screen';

const initialScreenType = getScreenType();

const type = (state = initialScreenType, action) => {
  switch (action.type) {
    case SET_SCREEN_TYPE:
      return action.data;
    default:
      return state;
  }
};

const scrollActive = (state = false, action) => {
  switch (action.type) {
    case SET_SCROLL_ACTIVE:
      return action.data;
    default:
      return state;
  }
};

const blocked = (state = false, action) => {
  switch (action.type) {
    case SET_BLOCKED:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  type, scrollActive, blocked,
});
