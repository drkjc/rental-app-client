import React from 'react';


function CartCard({ item }) {
  console.log(item)
  return <h1>{item.name}</h1>
}

export default CartCard;