import React, { Component } from 'react';
import './App.css';
import Shelf from './containers/Shelf';
import ItemCardDisplay from './containers/ItemCardDisplay';
import Item from './containers/Item';
import Navbar from './components/Navbar';
import Cart from './containers/Cart';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         <Router>
//           <div id="navbar">
//             <Navbar />
//           </div>
//           <div id='cart'>
//             <Route path="/cart" component={Cart}/>
//           </div>
//           <div id="main-content">
//             <Route exact path="/shelves/:shelf_id/items/:id" render={(props) => <ItemCardDisplay {...props}/>}/>
//           </div>
//           <div id="shelf">
//             <Route exact path="/shelves" component={Shelf}/>
//             <Route path="/shelves/:shelf_id/items" render={(props) => <Item {...props} />}/>
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div id="navbar">
            <Navbar />
          </div>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route path="/shelves/:shelf_id/items/:id" render={(props) => <ItemCardDisplay {...props} />} />
            <Route exact path="/shelves" component={Shelf} />
            <Route path="/shelves/:shelf_id/items" render={(props) => <Item {...props} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
