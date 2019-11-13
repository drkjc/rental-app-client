const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

export const getItems = () => {
  return function(dispatch) {
    return fetch(`${API_URL}/items`)
      .then(response => response.json())
      .then(items => dispatch({type: 'GET_ITEMS', payload: items}))
    }
  }

export const getItem = id => {
  return function (dispatch) {
    return fetch(`${API_URL}/items/${id}`)
      .then(response => response.json())
      .then(item => dispatch({ type: 'GET_ITEM', payload: item }))
  }
}
