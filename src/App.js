import React from 'react';
import './App.css';
import ShelfList from './components/ShelfList';
import ItemCard from './components/ItemCard';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main-content">
        <Route path="/items/:id" render={(props) => <ItemCard {...props}/>}/>
      </div>
      <div className="shelf">
        <Route exact path="/shelves" component={ShelfList}/>
        <Route path="/shelves/:id/items" render={(props) => <ItemList {...props} />}/>
      </div>
    </div>
  );
}

export default App;
