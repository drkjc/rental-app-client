import React from 'react';
import './App.css';
import Shelf from './components/Shelf';
import ItemCard from './components/ItemCard';
import Navbar from './components/Navbar';
import ItemService from './services/ItemService';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <Switch>
        <div className="main-content">
          <div className="main-content">
            <Route path="/items/:id" render={(props) => <ItemCard {...props} />} />
          </div>
        </div>
        <div className="shelf">
          <Route path="/shelves" render={(props) => <Shelf {...props} />} />
        </div>
      </Switch>
    </div>
  );
}

export default App;
