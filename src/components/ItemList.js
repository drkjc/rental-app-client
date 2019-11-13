import React from 'react';
import ItemCard from './ItemCard'


  // renderItems = () => {
  //   return this.state.items.map(item => {
  //     return <p><Link to={{ pathname: `/shelves/${this.props.match.params.id}/items/${item.id}`, state: item }}>{item.name}</Link></p>
  //   })
  // }



const ItemList = ({ items }) => {
  return items.map(item => {
    return <ItemCard key={item.id} item={item} />
  })
}

export default ItemList