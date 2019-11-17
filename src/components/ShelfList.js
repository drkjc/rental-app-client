import React from 'react';
import ShelfCard from './ShelfCard';

const ShelfList = ({ shelves, user_id }) => {
  return shelves.map(shelf => {
    if (shelf.user.id !== user_id) {
      return <ShelfCard key={shelf.id} shelf={shelf} />
    }
  }) 
}

export default ShelfList;