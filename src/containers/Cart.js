import React, { Component } from 'react';
import { getCart } from '../redux/actions/cart';
import { connect } from 'react-redux';
import CartList from '../components/CartList';

class Cart extends Component {

  componentDidMount() {
    let id = 2
    this.props.getCart(id)
  }

  handleLoading = () => {
    console.log(this.props.cart, 'handle')
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <CartList cart={this.props.cart} />
    }
  }

  render() {
    return <div>{this.handleLoading()}</div>
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    loading: state.cart.loading
  }
}



export default connect(mapStateToProps, { getCart })(Cart);