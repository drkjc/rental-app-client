import React from 'react';

function UserShelfItemCard({ item }) {
  console.log(item)

  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <p>{item.rented ? 'Unavailable' : 'Available'}</p>
      <button>Edit</button>
    </div>
  )
}

export default UserShelfItemCard;