import { combineReducers } from 'redux';
import { SET_COUNT, RESET_ACCOUNTS, ADD_ACCOUNTS, SET_LOADING } from '../actions/accounts';

const count = (state = 0, action) => {
  switch (action.type) {
    case SET_COUNT:
      return action.data;
    default:
      return state;
  }
};

const data = (state = {}, action) => {
  switch (action.type) {
    case ADD_ACCOUNTS:
      return Object.assign({}, state, action.data);
    case RESET_ACCOUNTS:
      return {};
    default:
      return state;
  }
};

const loading = (state = false, action) => {
  switch (action.type) {
    case SET_LOADING:
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  count, data, loading,
});
