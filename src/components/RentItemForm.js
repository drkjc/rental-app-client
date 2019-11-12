import React, { Component } from 'react';

class RentItemForm extends Component {

  state = {
    item: this.props.item,
    startDate: '',
    endDate: ''
  }

  handleChange = () => {
    console.log(this.startDate)
  }

  addToCart = event => {
    event.preventDefault();
    console.log(this.state.startDate)
  }

  render() {
    return (
      <form onSubmit={event => this.addToCart(event)}>
        Start Date: <input onChange={this.handleChange} value={this.state.startDate} type="date" /><br />
        End Date: <input onChange={this.handleChange} value={this.state.endDate} type="date" /><br />
        <button type="submit">Rent</button>
      </form>
    )
  }
}

export default RentItemForm;