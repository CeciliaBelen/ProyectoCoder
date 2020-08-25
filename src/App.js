import React from 'react';
import logo from './logo.svg';
import MyNav from './components/Navbar';
import Greeting from './components/Home';
import './App.css';

function App() {
  return (
    <div>
      <MyNav />
      <div className="App">
        <header className="App-header">
          <Greeting></Greeting>
        </header>
      </div>
    </div>
  );
}

export default App;
