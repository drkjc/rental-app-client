export default function shelfReducer(state = {
  shelves: [],
  items: [],
  item: []
}, action) {
  switch (action.type) {
    case 'LOADING_SHELVES':
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
    case 'LOADING_SHELF_ITEMS':
      return {
        ...state,
        items: [...state.items],
        loading: true
      }
    case 'GET_SHELF_ITEMS':
      return {
        ...state, 
        items: action.payload,
        loading: false
      }
    case 'LOADING_SHELF_ITEM':
      return {
        ...state,
        item: [],
        loading: true
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