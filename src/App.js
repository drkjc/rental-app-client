import React from 'react';
import './App.css';
import ShelfList from './components/ShelfList';
import ItemCard from './containers/ItemCard';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import Cart from './containers/Cart';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <div id="navbar">
          <Navbar />
        </div>
        <div id='cart'>
          <Route exact path="/cart" render={(props) => <Cart {...props}/>}/>
        </div>
        <div id="main-content">
          <Route exact path="/shelves/:shelf_id/items/:id" render={(props) => <ItemCard {...props}/>}/>
        </div>
        <div id="shelf">
          <Route exact path="/shelves" component={ShelfList}/>
          <Route path="/shelves/:id/items" render={(props) => <ItemList {...props} />}/>
        </div>
      </Router>
    </div>

  );
}

export default App;
