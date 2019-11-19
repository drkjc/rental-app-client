import React, { Component } from 'react';
import './App.css';
import Shelf from './containers/Shelf';
import ItemCardDisplay from './containers/ItemCardDisplay';
import Item from './containers/Item';
import Navbar from './components/Navbar';
import Cart from './containers/Cart';
import UserShelf from './containers/UserShelf';
import EditItemForm from './components/EditItemForm'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div id="navbar">
            <Navbar />
          </div>
            <div className="wrapper">
              <div>
                <Switch>
                  <Route path="/editItem" render={(props) => <EditItemForm {...props} user_id={this.props.user_id} />} />
                  <Route path="/cart" render={(props) => <Cart {...props} user_id={this.props.user_id} />} />
                  <Route path="/shelf" render={(props) => <UserShelf {...props} user_id={this.props.user_id} />} />
                </Switch>
              </div>
              <div>
                <Route path="/shelves/:shelf_id/items/:id" render={(props) => <ItemCardDisplay {...props} />} />
                <Route path="/shelves" render={(props) => <Shelf {...props} user_id={this.props.user_id} /> } />
                <Route path="/shelves/:shelf_id/items" render={(props) => <Item {...props} />} />
              </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
