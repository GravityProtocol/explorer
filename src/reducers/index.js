import { combineReducers } from 'redux';
import search from './search';
import screen from './screen';
import menu from './menu';
import api from './api';
import accounts from './accounts';

export default combineReducers({
  search, screen, menu, api, accounts,
});
