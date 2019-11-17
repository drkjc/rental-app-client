import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {

  return (
    <div>
      <p><Link to={{ pathname: `/shelves` }}>shelves</Link></p>
      <p><Link to={{ pathname: `/cart` }}>cart</Link></p>
    </div>
  )
}

export default Navbar;