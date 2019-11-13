import React, { Component } from 'react';
import { getCart } from '../redux/actions/cart';
import { connect } from 'react-redux';
import CartList from '../components/CartList';

let id = 2

class Cart extends Component {

  // componentDidMount() {
  //   this.props.getCart(id)
  // }

  render() {
    console.log(this.props.cart, 'Cart Component')
    return (
      <div>
        <h1>Cart</h1>
        {/* <CartList items={this.props.cart}/> */}
        <CartList items={this.props.cart} />
      </div>
    )
  }
}

const mapStateToProps = state => ({cart: state.cart.items})

export default connect(mapStateToProps, { getCart })(Cart);