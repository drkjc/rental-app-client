import React from 'react';
import CartCard from './CartCard';

const CartList = ({ cart, removeItem }) => {
  if (typeof cart !== 'undefined' && cart.length > 0) {
    // the array is defined and has at least one element
    return cart.map(item => {
      return <CartCard key={item.id} item={item} removeItem={removeItem} />
    })
  } else {
    return 'Your cart is empty'
  }
}

export default CartList;