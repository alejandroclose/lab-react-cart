import React, { Component } from 'react';
import './App.css';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cart>kart</Cart>
      </div>
    );
  }
}

export default App;
