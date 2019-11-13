const API_URL = process.env.REACT_APP_API_URL;

export const fetchShelves = () => {
  return function (dispatch) {
    return fetch(`${API_URL}/shelves`)
      .then(response => response.json())
      .then(shelves => dispatch({ type: 'FETCH_SHELVES', payload: shelves }))
  }
}

export const fetchShelfItems = id => {
  return function (dispatch) {
    return fetch(`${API_URL}/shelves/${id}/items`)
      .then(response => response.json())
      .then(items => dispatch({ type: 'FETCH_SHELF_ITEMS', payload: items }))
  }
}