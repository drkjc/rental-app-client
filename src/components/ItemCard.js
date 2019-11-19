import React from 'react';
import { Link } from 'react-router-dom';

function ItemCard({ item }) {
  return <p><Link to={{ pathname: `/shelves/${item.shelf_id}/items/${item.id}` }}>{item.name}</Link></p>
}

export default ItemCard;
