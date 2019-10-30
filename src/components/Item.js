import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Item = ({ item }) => {
  return (
    <Router>
      <div>
        <Link to={{
          pathname: `/items/${item.id}`,
          state: {
            item: true
          }
        }} className="item">{item.name}
        </Link>
      </div>
    </Router>
  )
}

export default Item