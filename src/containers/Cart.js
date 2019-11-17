import React, { Component } from 'react';
import { getCart, removeItemFromCart } from '../redux/actions/cart';
import { connect } from 'react-redux';
import CartList from '../components/CartList';

class Cart extends Component {

  componentDidMount() {
    let id = 1
    //let id = this.props.match.params.id
    this.props.getCart(id)
  }

  handleLoading = () => {
      if (this.props.loading) {
        return <div>Loading...</div>
      } else {
        return <CartList cart={this.props.cart} removeItem={this.props.removeItemFromCart} />
      }
  }

  render() {
    return <div id='cart'>{this.handleLoading()}</div>
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.items,
    loading: state.cart.loading
  }
}



export default connect(mapStateToProps, { getCart, removeItemFromCart })(Cart);