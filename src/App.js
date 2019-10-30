import React from 'react';
import './App.css';
import Shelf from './components/Shelf';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <p>Navbar</p>
      </div>
      <div className="shelf">
        <Shelf />
      </div>
      <div className="main-content">
        <p>Main Content</p>
      </div>
    </div>
  );
}

export default App;
