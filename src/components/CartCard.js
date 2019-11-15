import React from 'react';
import moment from 'moment';

function CartCard({ item, removeItem }) {

  let dueDate = moment(item.end_date).format('MM/DD/YYYY');
  let dueTime = moment(item.end_date).format('hA')

  function handleClick(item) {
    let id = 1
    removeItem(id, item);
  }

  console.log(item, 'cart card')

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.price}</p>
      <p>Due back on {dueDate} by {dueTime}  </p>
      <button onClick={() => handleClick(item)}>x</button>
    </div>
  )
}

export default CartCard;