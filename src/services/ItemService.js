const ItemService = {
  fetchItems: () => {
    return fetch('/items')
    .then(response => response.json())
  }
}

export default ItemService;