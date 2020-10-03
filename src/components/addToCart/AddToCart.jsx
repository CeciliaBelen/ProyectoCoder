import React, { Component } from 'react'
import Btn from './Button'
import Input from './Input'

export default class AddToCart extends Component {
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
    handleQty = (qty)=>{
        this.setState({
            count: qty.target.value
        })
    }
    render() {
        return (
            <div>
                <Btn onClick={this.handleSubstract} sign={"-"} />
                <Input count={this.state.count} handleChange={this.handleChange} />
                <Btn onClick={this.handleAdd} sign={"+"} />
            </div>
        )
    }
}