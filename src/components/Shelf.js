import React, { Component } from 'react'
import Item from './Item'

class Shelf extends Component {
  
  state = {
    items: [
      {
      name: 'tent',
      price: '2',
      rented: false
    },
    {
      name: 'bike',
      price: '.50',
      rented: true
    }
  ]
  }

  renderItems = () => {
    return this.state.items.map(item => {
      return <Item key={item.name} item={item} className="item"/>
    })
  }

  render() {
    return (
      <div>{this.renderItems()}</div>
    )
  }
}

export default Shelf;