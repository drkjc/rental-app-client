import React, { Component } from 'react'
import ItemService from '../services/ItemService';
class ItemDisplay extends Component {
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

  render() {
    return (
      <div>
        <h1>{this.state.item.name}</h1>
      </div>
    )
  }
}

export default ItemDisplay;