import { combineReducers } from 'redux';
import search from './search';
import screen from './screen';
import menu from './menu';

export default combineReducers({
  search, screen, menu,
});
