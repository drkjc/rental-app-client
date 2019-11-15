export default function cartReducer(state = {
  cart: [],
  loading: true
}, action) {
  switch (action.type) {
    case 'LOADING_CART':
      return {
        ...state,
        cart: []
      }
    case 'GET_CART':
      return {
        ...state, 
        cart: action.payload,
        loading: false
      }
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        cart: [...state, action.payload],
        loading: true
      }
    case 'REMOVE_ITEM_FROM_CART':
      console.log(state.cart, 'reducer state')
      return ''
    default:
      return state;
  }
}