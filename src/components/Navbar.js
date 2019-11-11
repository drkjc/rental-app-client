import React, { Component } from 'react';
import ItemService from '../services/ItemService';
import { Link } from 'react-router-dom';


function Navbar() {
  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     shelves: []
  //   }
  // }

  // componentDidMount() {
  //   ItemService.fetchShelves().then(shelves => this.setState({ shelves }))
  // }

  // renderShelves = () => {
  //   return this.state.shelves.map(shelf => {
  //     return <p>{shelf.user_id}</p>
  //   })
  // }

  // renderShelves = () => {
  //   console.log(this.state)
  //   return this.state.shelves.map(shelf => {
  //     return <p key={shelf.user.name}><Link to={{ pathname: `/shelf/${shelf.id}/items`, state: shelf.items }}>{shelf.user.name}</Link></p>
  //   })
  // }
  
  return (
    <div>
      <Link to={{ pathname: `/shelves` }}>shelves</Link>
    </div>
  )
}

export default Navbar;