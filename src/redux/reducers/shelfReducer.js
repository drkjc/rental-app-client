export default function shelfReducer(state = {
  shelves: [],
  items: [],
  item: [],
  loading: true
}, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        shelves: [...state.shelves],
        loading: true
      }
    case 'GET_SHELVES':
      return {
        ...state,
        shelves: action.payload,
        loading: false
      }
    case 'GET_SHELF_ITEMS':
      return {
        ...state, 
        items: action.payload,
        loading: false
      }
    case 'GET_ITEM':
      return {
        ...state,
        item: action.payload,
        loading: false
      }
    case 'ADD_ITEM_TO_CART':
      return {
        ...state,
        item: action.payload,
        loading: false
      }
    case 'GET_USER_SHELF_ITEMS':
      return {
        ...state,
        items: action.payload, 
        loading: false
      }
    case 'ADD_ITEM_TO_SHELF':
      return {
        ...state, 
        items: action.payload,
        loading: false
      }
    case 'UPDATE_ITEM':
      return {
        ...state,
        item: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}