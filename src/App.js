import React, { Component } from 'react';
import Greeting from './components/Home';
import MyNav from './components/Navbar';
import Btn from './components/Button';
import Input from './components/Input';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    }
    this.minUnit = 1;
    this.maxUnit = 10;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (event) => {
    this.setState({
      count: event.target.value
    });
  }
  handleAdd = () => {
    if (this.state.count < this.maxUnit) {
      this.setState((state) => ({
        count: state.count + 1
      }));
    }
  }
  handleSubstract = () => {
    if (this.state.count > this.minUnit) {
      this.setState((state) => ({
        count: state.count - 1
      }));
    }
  }
  render() {
    return (
      <div>
        <MyNav />
        <div className="App">
          <header>
            <Greeting name="editorial NN" />
          </header>
          <Btn onClick={this.handleSubstract} sign={"-"} />
          <Input count={this.state.count} handleChange={this.handleChange} />
          <Btn onClick={this.handleAdd} sign={"+"} />
        </div>
      </div>
    );
  }
}

