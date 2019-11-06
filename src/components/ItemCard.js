import React, { Component } from 'react'
import ItemService from '../services/ItemService';
import RentItemForm from './RentItemForm';

class ItemCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      item: {}
    }
  }

  componentDidMount() {
    let id = parseInt(this.props.match.params.id)
    ItemService.fetchItem(id).then(item => this.setState({ item }))
  }

  componentWillReceiveProps(nextProps) {
    let id = nextProps.match.params.id;
    if (id === this.state.item.id) {
      return;
    } else {
      ItemService.fetchItem(id).then(item => this.setState({ item }))
    }
  }

  rented = item => {
    if (item.rented) {
      return <>Unavailable</>
    } else {
      return <>Available</>
    }
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>{this.state.item.name}</h1>
        <p>{this.state.item.price}</p>
        <p>{this.rented(this.state.item)}</p>
        <RentItemForm />
      </div>
    )
  }
}

export default ItemCard;