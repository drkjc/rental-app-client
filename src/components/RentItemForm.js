import React, { Component } from 'react';

class RentItemForm extends Component {
  render() {
    return (
      <form>
        Start Date: <input type="date" /><br />
        End Date: <input type="date" /><br />
        <button type="submit">Rent</button>
      </form>
    )
  }
}

export default RentItemForm;