export default function cartReducer(state = {
  cart: []
}, action) {
  switch (action.type) {
    case 'LOADING_CART':
      return {
        ...state,
        cart: [],
        loading: true
      }
    case 'GET_CART':
      return {
        ...state, 
        cart: action.payload,
        loading: false
      }
    default:
      return state;
  }
}