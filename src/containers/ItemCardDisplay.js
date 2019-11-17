import React, { Component } from 'react'
import RentItemForm from '../components/RentItemForm';

class ItemCardDisplay extends Component {

  state = {
    name: '',
    price: '',
    rented: ''
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps, 'prevProps')
    console.log(prevState, 'prevState')
  }

  rented = rented => {
    if (rented === false) {
      return (
        <>
          <h3>Available</h3>
          <RentItemForm item={this.props.location.state} />
        </>
      )
    } else {
      return <>Unavailable</>
    }
  }


  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      let {name, price, rented} = this.props.location.state
      return (
        <>
          <h1>{name}</h1>
          <p>{price}</p>
          <>{this.rented(rented)}</>
        </>  
      )
    }
  }

  render() {
    return (
      <div>
        {this.handleLoading()}
      </div>
    )
  }
}

export default ItemCardDisplay;