import React from 'react';
import CartCard from './CartCard';

const CartList = (props) => {
  return props.cart.map(item => {
    return <CartCard key={item.id} item={item} removeItem={props.removeItem}/>
  })
}

export default CartList;