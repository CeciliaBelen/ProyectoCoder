import React from 'react';
import Greeting from './components/Home';
import MyNav from './components/Navbar/Navbar';
import AddToCart from './components/addToCart/AddToCart';
import ProductList from './components/products/Products'
import './App.css';


function App() {
  return (
    <div>
      <MyNav />
      <div className="App">
        <header>
          <Greeting name="editorial NN" />
        </header>
        <ProductList/>
        <AddToCart />
      </div>
    </div>
  );
}

export default App
