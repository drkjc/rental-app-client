import React, { Component } from 'react';
import ItemService from '../services/ItemService';
import { Link } from 'react-router-dom';

class ItemList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    ItemService.fetchShelfItems(id).then(items => this.setState({ items }))
  }

  renderItems = () => {
    return this.state.items.map(item => {
      return <p><Link to={{ pathname: `/shelves/${this.props.match.params.id}/items/${item.id}`, state: item }}>{item.name}</Link></p>
    })
  }


  render() {
    return (
      <div>{this.renderItems()}</div>
    )
  }
}

export default ItemList