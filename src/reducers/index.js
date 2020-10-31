import { combineReducers } from 'redux';
import moviesReducer from './movies';
import filterReducer from './filter';
import queryFilterReducer from './queryFilter';

const rootReducer = combineReducers({
  movies: moviesReducer,
  filter: filterReducer,
  query: queryFilterReducer,
});

export default rootReducer;