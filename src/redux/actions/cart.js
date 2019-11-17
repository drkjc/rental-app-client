import { createBrowserHistory } from 'history';
const API_URL = process.env.REACT_APP_API_URL;

const history = createBrowserHistory();

export function getCart(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch(`${API_URL}/carts/${id}/items`)
      .then(response => response.json())
      .then(cart => {
        dispatch({ type: 'GET_CART', payload: cart })
      }
    )
  }
}

export function addItemToCart(id, cart) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch(`${API_URL}/carts/${id}/items`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ cart })
    })
    .then(response => response.json())
    .then(cart => {
      dispatch({ type: 'ADD_ITEM_TO_CART', payload: cart })
    })
    .catch(err => {
      console.error(err);
    });
  }
}

export function removeItemFromCart(id, item_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch(`${API_URL}/carts/${id}/items/${item_id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(item => dispatch({ type: 'REMOVE_ITEM_FROM_CART', payload: item })
  )}
}
