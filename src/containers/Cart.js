import React, { Component } from 'react';
import { getCart } from '../redux/actions/cart';
import { connect } from 'react-redux';
import CartList from '../components/CartList';

class Cart extends Component {

  componentDidMount() {
    let id = 2
    //let id = this.props.match.params.id
    this.props.getCart(id)
  }

  handleLoading = () => {
    console.log(this.props, 'handle')

      if (this.props.loading) {
        return <div>Loading...</div>
      } else {
        return <CartList cart={this.props.three} />
      }
  }

  render() {
    return <div>{this.handleLoading()}</div>
  }
}

const mapStateToProps = state => {
  return {
    three: state.one.two.items,
    loading: state.one.loading
  }
}



export default connect(mapStateToProps, { getCart })(Cart);