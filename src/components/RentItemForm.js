import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../redux/actions/cart';
import Datetime from 'react-datetime';
import '../react-datetime.css';

class RentItemForm extends Component {

  state = {
    item: this.props.item,
    startDate: this.props.item.start_date,
    endDate: this.props.item.end_date
  }

  handleDateStarted = date => {
    this.setState({ startDate: date })
  }

  handleDateEnded = date => {
    this.setState({ endDate: date })
  }

  addToCart = event => {
    let id = 1
    event.preventDefault();
    console.log(this.state)
    this.props.addItemToCart(id, this.state)
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

export default connect(null, { addItemToCart })(RentItemForm);