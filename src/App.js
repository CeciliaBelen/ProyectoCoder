import React from 'react';
import logo from './logo.svg';
import MyNav from './components/Navbar';
import './App.css';

function Greeting(props){
  return(<h1>¡Bienvenidos a {props.name}!</h1>)
}

function App() {
  return (
    <div>
      <MyNav />
      <div className="App">
        <header className="App-header">
          <Greeting name="editorial NN"></Greeting>
        </header>
      </div>
    </div>
  );
}

export default App;
