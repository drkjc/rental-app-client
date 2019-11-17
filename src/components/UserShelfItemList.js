import React from 'react';
import UserShelfItemCard from './UserShelfItemCard'

const UserShelfItemList = ({ items }) => {
  debugger;
  return items.map(item => {
    return <UserShelfItemCard key={item.id} item={item} />
  })
}

export default UserShelfItemList;