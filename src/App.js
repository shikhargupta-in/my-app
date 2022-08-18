import logo from './logo.svg';
import './App.css';
import React from 'react';
import Users from './components/Users';
import Products from './components/Products';
import Orders from './components/Orders';

function App() {
  return (
    <div className="App">
      <h2 className='Headings'> Users</h2>
      <Users />
      <h2 className='Headings'> Products</h2>
      <Products />
      <h2 className='Headings'> Orders</h2>
      <Orders />
    </div>
  );
}

export default App;
