import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ItemService from '../services/ItemService';

class ShelfList extends Component {

  state = {
    shelves: []
  }
  
  componentDidMount() {
    ItemService.fetchShelves().then(shelves => this.setState({ shelves }))
  }

  renderShelves = () => {
    return this.state.shelves.map(shelf => {
      return <p key={shelf.id}><Link to={{ pathname: `/shelves/${shelf.id}/items`, state: shelf.items }}>{shelf.user.name}</Link></p>
    })
  }

  render() {
    return (
      <div>{this.renderShelves()}</div>
    )
  }
}

export default ShelfList;