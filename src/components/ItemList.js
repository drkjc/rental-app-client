import React from 'react';
import Item from './Item';

function ItemList(props) {

  function renderItems(props) {
    return props.location.state.map(item => {
      return <Item key={item.id} item={item} />
    })
  }

  return (
    <div>{renderItems(props)}</div>
  )
}

export default ItemList