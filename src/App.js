import React, { Component } from 'react';
import './App.css';
import Shelf from './containers/Shelf';
import ItemCardDisplay from './containers/ItemCardDisplay';
import Item from './containers/Item';
import Navbar from './components/Navbar';
import Cart from './containers/Cart';
import UserShelf from './containers/UserShelf';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div id="navbar">
            <Navbar />
          </div>
          <Switch>
            <div>
              <Route path="/cart" component={Cart} />
              <Route path="/shelf" render={(props) => <UserShelf {...props} user_id={this.props.user_id}/> } />
              <Route path="/shelves/:shelf_id/items/:id" render={(props) => <ItemCardDisplay {...props} />} />
              <Route exact path="/shelves" component={Shelf} />
              <Route path="/shelves/:shelf_id/items" render={(props) => <Item {...props} />} />
            </div>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
