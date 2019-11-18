import React from 'react';
import { Link } from 'react-router-dom';

function UserShelfItemCard({ item }) {

  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.rented ? 'Unavailable' : 'Available'}</p>
      <button><Link to={{ pathname: `/editItem` , state: item}}>Edit</Link></button>
    </div>
  )
}

export default UserShelfItemCard;