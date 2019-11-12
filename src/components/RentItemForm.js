import React, { Component } from 'react';
import Datetime from 'react-datetime';
import '../react-datetime.css';

class RentItemForm extends Component {

  state = {
    item: this.props.item,
    startDate: '',
    endDate: ''
  }

  handleDateStarted = date => {
    this.setState({ startDate: date })
  }

  handleDateEnded = date => {
    this.setState({ endDate: date })
  }

  addToCart = event => {
    event.preventDefault();
    console.log(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.addToCart(event)}>
        Start Date: <Datetime onChange={this.handleDateStarted}/><br />
        End Date: <Datetime onChange={this.handleDateEnded} /><br />
        <button type="submit">Rent</button>
      </form>
    )
  }
}

export default RentItemForm;