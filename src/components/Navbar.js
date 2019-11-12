import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {

  function renderShelves() {
    document.getElementById('main-content').style.visibility = 'visible';
    document.getElementById('shelf').style.visibility = 'visible';
    document.getElementById('cart').style.visibility = 'hidden';
  }

  function renderCart() {
    document.getElementById('main-content').style.visibility = 'hidden';
    document.getElementById('shelf').style.visibility = 'hidden';
    document.getElementById('cart').style.visibility = 'visible';
  }
  
  return (
    <div>
      <p><Link onClick={renderShelves} to={{ pathname: `/shelves` }}>shelves</Link></p>
      <p><Link onClick={renderCart} to={{ pathname: `/cart` }}>cart</Link></p>
    </div>
  )
}

export default Navbar;