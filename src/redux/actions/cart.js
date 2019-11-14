const API_URL = process.env.REACT_APP_API_URL;

export function getCart(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_CART' })
    fetch(`${API_URL}/carts/${id}`)
      .then(response => response.json())
      .then(cart => dispatch({ type: 'GET_CART', payload: cart }))
      .catch(err => {
        console.error(err);
      });
  }
}

export const addItemToCart = () => {
  return function(dispatch) {
    return fetch('http://localhost:3001/cart'
    )
  }
}