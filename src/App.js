import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Greeting from './components/Home';
import MyNav from './components/Navbar/Navbar';
import Products from './components/products/Products';
import BookDetailContainer from './containers/BookDetailContainer';
import { CartProvider } from './components/cartContext'
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MyNav />
          </Route>
        </Switch>
        <div className="App">
          <Switch>
            <Route path="/">
              <header>
                <Greeting name="editorial NN" />
              </header>
            </Route>
            <CartProvider>
              <Route exact path="/products">
                <Products />
              </Route>
              <Route path="/products/:id">
                <BookDetailContainer />
              </Route>
            </CartProvider>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
