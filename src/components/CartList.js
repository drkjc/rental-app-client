import React from 'react';
import CartCard from './CartCard';


const CartList = (props) => {
  return props.cart.map(item => {
    return <p><CartCard item={item}/></p>
  })
}

export default CartList;