import logo from './logo.svg';
import './App.css';
import React from 'react';
import Users from './components/Users';
import Products from './components/Products';
import Orders from './components/Orders';

function App() {
  return (
    <div className="App">
      <h2> Users</h2>
      <Users/>
      <h2> Products</h2>
      <Products/>
      <h2> Orders</h2>
      <Orders/>
    </div>
  );
}

export default App;
