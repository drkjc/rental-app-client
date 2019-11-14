import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import shelfReducer from './shelfReducer';

const rootReducer = combineReducers({
  one: cartReducer,
  shelf: shelfReducer
})

export default rootReducer;