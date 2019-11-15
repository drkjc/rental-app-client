export default function cartReducer(state = {
  two: [],
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
        two: action.payload,
        loading: false
      }
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        two: [...state, action.payload],
        loading: true
      }
    case 'REMOVE_ITEM_TO_CART':
      console.log(state.two, 'reducer state')
      return ''
    default:
      return state;
  }
}