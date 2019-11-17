import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class UserShelfItemCardDisplay extends Component {


  state = {
    redirect: false
  }

  redirectDisplayComponent = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/cart' />
    }
  }

  rented = rented => {
    if (rented === false) {
      return (
        <>
          <h3>Available</h3>
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
      let { name, price, rented } = this.props.location.state
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
      <div id="main-content">
        {this.handleLoading()}
        {this.renderRedirect()}
      </div>
    )
  }
}

export default UserShelfItemCardDisplay;