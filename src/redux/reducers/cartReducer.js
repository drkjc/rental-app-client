export default function cartReducer(state = {
  cart: [],
  items: [],
  loading: true
}, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        cart: [],
        items: [],
        loading: true
      }
    case 'GET_CART':
      return {
        ...state, 
        items: action.payload,
        loading: false
      }
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        items: action.payload,
        loading: false
      }
    case 'REMOVE_ITEM_FROM_CART':
      const items = state.items.filter(item => item.id !== action.payload.id);
      return {
        items
      }
    default:
      return state;
  }
}