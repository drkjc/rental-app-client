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
    case 'GET_SHELF_ITEM':
      return {
        ...state,
        item: action.payload,
        loading: false
      }
    default:
      return state;
  }
}