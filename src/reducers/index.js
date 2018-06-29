import { combineReducers } from 'redux';
import search from './search';
import screen from './screen';
import menu from './menu';
import api from './api';

export default combineReducers({
  search, screen, menu, api,
});
