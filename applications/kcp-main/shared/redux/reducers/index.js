import {combineReducers} from 'redux';
import pictures from './picturesReducer';
import filters from './filterReducer';
import search from './searchReducer';
import modal from './modalReducer';
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  pictures,
  filters,
  search,
  modal,
  routing,
  form
});

export default rootReducer;
