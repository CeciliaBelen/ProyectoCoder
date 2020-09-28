import React, { Component } from 'react';
import List from './List';
import Data from '../../utils/books.json';

export default class ProductList extends Component {
    constructor() {
        super();
        this.books = Data;

        const task = new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.books) {
                    resolve(true)
                } else {
                    reject(true)
                }
            }, 2000)
        })
        task.then(result => {
            console.log(result)
        })
    }
    render() {
        return (
            <List data={this.books} />
        )
    }
}