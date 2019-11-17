import React, { Component } from 'react'
import { getShelves } from '../redux/actions/shelf';
import { connect } from 'react-redux';
import ShelfList from '../components/ShelfList';

class Shelf extends Component {

  componentDidMount() {
    this.props.getShelves()
  }

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <ShelfList shelves={this.props.shelves} />
    }
  }

  render() {
    return (
      <div id="shelf">{this.handleLoading()}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shelves: state.shelf.shelves,
    loading: state.shelf.loading
  }
}

export default connect(mapStateToProps, { getShelves })(Shelf);