import React from 'react';
import { Link } from 'react-router-dom';

function UserShelfItemCard({ item }) {
  return <p><Link to={{ pathname: `/users/${item.shelf_id}/shelves/${item.shelf_id}/items`, state: item }}>{item.name}</Link></p>
}

export default UserShelfItemCard;