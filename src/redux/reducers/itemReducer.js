export default function itemReducer(state = {
  items: []
}, action) {
  switch (action.type) {
    case 'GET_ITEM':
      return action.payload
    case 'GET_ITEMS':
      return action.payload
    default:
      return state;
  }
}