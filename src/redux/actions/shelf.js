const API_URL = process.env.REACT_APP_API_URL;

export function getShelves() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SHELVES'})
    fetch(`${API_URL}/shelves`)
      .then(response => response.json())
      .then(shelves => dispatch({ type: 'GET_SHELVES', payload: shelves }))
    }
  }

export const getShelfItems = id => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_SHELF_ITEMS'})
    fetch(`${API_URL}/shelves/${id}/items`)
      .then(response => response.json())
      .then(items => dispatch({ type: 'GET_SHELF_ITEMS', payload: items }))
  }
}

export function getItem(shelf_id, id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ITEM' })
    fetch(`${API_URL}/shelves/${shelf_id}items/${id}`)
      .then(response => response.json())
      .then(item => dispatch({ type: 'GET_ITEM', payload: item }))
  }
}