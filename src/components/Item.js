import React from 'react';
import { Link } from 'react-router-dom';


const Item = ({ item }) => {

  return (
      <div>
        <Link to={{pathname:`/items/${item.id}`, state: item}}>{item.name}</Link>
      </div>
  )
}

export default Item