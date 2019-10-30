import React, { Component } from 'react'
import Item from './Item'
import ItemService from '../services/ItemService';

class Shelf extends Component {
  
  state = {
    items: []
  }

  componentDidMount() {
    ItemService.fetchItems().then(items => this.setState({ items }))
  }

  // setupItemDisplay = item => {
  //   this.props.handleItemDisplay(item)
  // }

  renderItems = () => {
    return this.state.items.map(item => {
      return <Item key={item.name} item={item} />
    })
  }

  render() {
    return (
      <div>{this.renderItems()}</div>
    )
  }
}

export default Shelf;