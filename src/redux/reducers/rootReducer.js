import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
//import itemReducer from './itemReducer';
import shelfReducer from './shelfReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  shelf: shelfReducer
})

export default rootReducer;