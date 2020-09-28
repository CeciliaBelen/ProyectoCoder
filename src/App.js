import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Greeting from './components/Home';
import MyNav from './components/Navbar/Navbar';
import Products from './components/products/Products';
import BookDetailContainer from './containers/BookDetailContainer';
import './App.css';


function App() {
  return (
    <div>
      {/* <BrowserRouter> */}
        <MyNav />
        <div className="App">
          {/* <Switch>
            <Route path="/"> */}
              <header>
                <Greeting name="editorial NN" />
              </header>
              <Products/>
            {/* </Route>
          </Switch>
          <Switch> */}
            {/* <Route path="/catalog"> */}
              <BookDetailContainer />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App
