import { combineReducers } from 'redux';
import movieList from './movieList.js';
import sortList from './sortList.js';

const rootReducer = combineReducers({
  movieList,
  sortList
});

export default rootReducer;
