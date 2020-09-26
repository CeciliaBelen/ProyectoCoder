import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Greeting from './components/Home';
import MyNav from './components/Navbar/Navbar';
import BookDetail from './components/products/BookDetail';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNav />
        <div className="App">
          <Switch>
            <Route path="/">
              <header>
                <Greeting name="editorial NN" />
              </header>
            </Route>
          </Switch>
          <Switch>
            <Route path="/catalog">
              <BookDetail />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
