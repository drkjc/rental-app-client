import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  
  return (
    <div>
      <Link to={{ pathname: `/shelves` }}>shelves</Link>
    </div>
  )
}

export default Navbar;