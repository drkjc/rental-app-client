import React, { Component } from 'react';
import ItemService from '../services/ItemService';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      shelves: []
    }
  }

  componentDidMount() {
    ItemService.fetchShelves().then(shelves => this.setState({ shelves }))
  }

  // renderShelves = () => {
  //   return this.state.shelves.map(shelf => {
  //     return <p>{shelf.user_id}</p>
  //   })
  // }
  
  render() {
    console.log(this.state)
    return (
      <div>
        <Link to={{ pathname: `/shelves`, state: this.state.shelves }}>shelves</Link>
      </div>
    )
  }
}

export default Navbar;