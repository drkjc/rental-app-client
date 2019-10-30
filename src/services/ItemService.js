const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

const ItemService = {
  fetchItems: () => {
    return fetch(`${API_URL}/items`)
    .then(response => response.json())
  },
  fetchItem: id => {
    return fetch(`${API_URL}/items/${id}`)
    .then(response => response.json())
  }
}

export default ItemService;