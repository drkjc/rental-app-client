import React from 'react';
import ShelfCard from './ShelfCard';

const ShelfList = ({ shelves }) => {
  return shelves.map(shelf => {
    return <ShelfCard key={shelf.id} shelf={shelf} />
  }) 
}

export default ShelfList;