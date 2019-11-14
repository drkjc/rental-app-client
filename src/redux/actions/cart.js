const API_URL = process.env.REACT_APP_API_URL;

export function getCart(id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch(`${API_URL}/carts/${id}`)
      .then(response => response.json())
      .then(cart => dispatch({ type: 'GET_CART', payload: cart }))
      .catch(err => {
        console.error(err);
      });
  }
}

export function addItemToCart(item) {
  return (dispatch) => {
    dispatch({ type: 'LOADING' })
    fetch(`${API_URL}/carts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item })
    })
      .then(response => response.json())
      .then(cart => dispatch({ type: 'GET_CART', payload: cart }))
      .catch(err => {
        console.error(err);
      });
  }
}
