import React, { Component } from 'react'
import RentItemForm from '../components/RentItemForm';
import { addItemToCart } from '../redux/actions/shelf';
import { connect } from 'react-redux';
import Item from './Item';

class ItemCardDisplay extends Component {

  rented = rented => {
    if (rented === false) {
      return (
        <>
          <h3>Available</h3>
          <RentItemForm item={this.props.location.state} addItemToCart={this.props.addItemToCart}/>
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
      <>
        <Item {...this.props}/>
        <div id="main-content">
          {this.handleLoading()}
        </div>
      </>
    )
  }
}

export default connect(null, { addItemToCart })(ItemCardDisplay);