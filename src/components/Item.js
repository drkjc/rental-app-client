import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({ item }) => {

  return (
      <p>
        <Link to={{pathname:`/items/${item.id}`, state: item}}>{item.name}</Link>
      </p>
  )
}

export default Item