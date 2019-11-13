export const getCart = (id) => {
  return function(dispatch) {
    // make the api call 
    // once we get the data, we can dispatch to reducers
    return fetch(`http://localhost:3001/api/carts/${id}`)
      .then(res => res.json())
      .then(cart => dispatch({ type: 'GET_CART', payload: cart }))
  };
};

export const addItemToCart = () => {
  return function(dispatch) {
    return fetch('http://localhost:3001/cart'
    )
  }
}