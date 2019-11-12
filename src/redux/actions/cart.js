export const getCart = () => {
  return function(dispatch) {
    // make the api call 
    // once we get the data, we can dispatch to reducers
    return fetch('http://localhost:3001/cart')
      .then(res => res.json())
      .then(cart => console.log(cart))
  };
};