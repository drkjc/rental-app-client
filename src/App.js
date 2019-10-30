import React from 'react';
import './App.css';
import Shelf from './components/Shelf';
import ItemDisplay from './components/ItemDisplay'

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <p>Navbar</p>
      </div>
      <div className="main-content">
        <ItemDisplay />
      </div>
      <div className="shelf">
        <Shelf />
      </div>
    </div>
  );
}

export default App;
