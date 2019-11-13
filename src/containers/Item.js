import React, { Component } from 'react';
import { getShelfItems } from '../redux/actions/shelf';
import { connect } from 'react-redux';
import ItemList from '../components/ItemList'

class Item extends Component {

  componentDidMount() {
    let id = this.props.match.params.id
    this.props.getShelfItems(id);
  }

  // renderItems = () => {
  //   return this.state.items.map(item => {
  //     return <p><Link to={{ pathname: `/shelves/${this.props.match.params.id}/items/${item.id}`, state: item }}>{item.name}</Link></p>
  //   })
  // }

  handleLoading = () => {
    if (this.props.loading) {
      return <div>Loading...</div>
    } else {
      return <ItemList items={this.props.items} />
    }
  }


  render() {
    return (
      <div>{this.handleLoading()}</div>
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.shelf.items,
    loading: state.shelf.loading
  }
}

export default connect(mapStateToProps, { getShelfItems })(Item)