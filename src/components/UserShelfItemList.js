import React from 'react';
import ItemCard from './ItemCard'

const UserShelfItemList = ({ items }) => {
  return items.map(item => {
    return <ItemCard key={item.id} item={item} />
  })
}

export default UserShelfItemList