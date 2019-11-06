import React from 'react';
import './App.css';
import Shelf from './components/Shelf';
import ItemCard from './components/ItemCard'
import ItemService from './services/ItemService';
import { Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <div className="navbar">
        <p>Navbar</p>
      </div>
      <div className="main-content">
        <Switch>
          <div className="main-content">
            <Route path="/items/:id" render={(props) => <ItemCard {...props} />} />
          </div>
        </Switch>
      </div>
      <div className="shelf">
        <Shelf />
      </div>
    </div>
  );
}

export default App;
