import React from 'react';
import CartCard from './CartCard';

const CartList = ({ cart, removeItem }) => {
  return cart.map(item => {
    return <CartCard key={item.id} item={item} removeItem={removeItem}/>
  })
}

export default CartList;