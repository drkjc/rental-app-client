import { combineReducers } from 'redux';
import cartReducer from './cartReducer';

// export default function rootReducer(state = {
//   cart: []
// }, action) {
//   switch(action.type) {
//     default: 
//       return state;
//   }
// }

const rootReducer = combineReducers({
  cart: cartReducer
})

export default rootReducer;