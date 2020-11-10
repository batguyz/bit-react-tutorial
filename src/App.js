import React from 'react';
import ProductList from './components/product-list';
import TopBar from './components/top-bar';
import './App.css';

function App() {
  return (
    <>
      <TopBar className="top-bar" />
      <div className="container">
      <h1>Product List Component</h1>
        <ProductList />
      </div>
    </>
  );
}

export default App;
