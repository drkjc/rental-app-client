import React from 'react';
import CartCard from './CartCard';


const CartList = (props) => {
  console.log(props, 'cartList')
  //debugger;
  return props.cart.map(item => {
    return <li>{item.name}</li>
  })
}

export default CartList;