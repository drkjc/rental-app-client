import React, { Component } from 'react'
import RentItemForm from '../components/RentItemForm';
import { Redirect } from 'react-router-dom'

class ItemCardDisplay extends Component {


  state = {
    redirect: false
  }

  renderCart = () => {
    document.getElementById('main-content').style.visibility = 'hidden';
    document.getElementById('shelf').style.visibility = 'hidden';
    document.getElementById('cart').style.visibility = 'visible';
  }

  redirectDisplayComponent = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      this.renderCart()
      return <Redirect to='/cart' />
    }
  }

  rented = rented => {
    if (rented === false) {
      return (
        <>
          <h3>Available</h3>
          <RentItemForm item={this.props.location.state} redirectDisplayComponent={this.redirectDisplayComponent} />
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
        {this.renderRedirect()}
      </div>
    )
  }
}

export default ItemCardDisplay;