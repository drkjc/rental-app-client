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
    case 'ADD_ITEM_TO_CART':
      return 'add item to cart'
    default:
      return state;
  }
}