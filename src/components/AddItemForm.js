import React, { Component } from  'react'; 
class AddItemForm extends Component {

  state = {
    name: '',
    category: '',
    price: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props)
    let user_id = this.props.user_id 
    let shelf_id = user_id
    this.props.addItem(user_id, shelf_id, this.state)
  }

  render() {
    return (
      <div id='addItemForm'>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}></input><br/>
          <input type="text" name="category" placeholder="category" value={this.state.category} onChange={this.handleChange}></input><br />
          <input type="text" name="price" placeholder="price" value={this.state.price} onChange={this.handleChange}></input><br />
          <button>Add Item</button>
        </form>
      </div>
    )
  } 
}

export default AddItemForm;