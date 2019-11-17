import React, { Component } from 'react';
import { getUserShelfItems } from '../redux/actions/shelf';
import { connect } from 'react-redux';
import UserShelfItemList from '../components/UserShelfItemList'

class UserShelf extends Component {

  componentDidMount() {
    // hard coded user_id, and shelf_id
    let user_id = 1
    let shelf_id = 1
    this.props.getUserShelfItems(user_id, shelf_id);
  }

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <UserShelfItemList items={this.props.items} />
    }
  }


  render() {
    return (
      <div id="user-shelf">{this.handleLoading()}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.shelf.items,
    loading: state.shelf.loading
  }
}

export default connect(mapStateToProps, { getUserShelfItems })(UserShelf)