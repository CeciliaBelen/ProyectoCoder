import React, { Component } from 'react';
import List from './List';

export default class ProductList extends Component {
    constructor() {
        super();
        this.books = [
            { "id": 1, "name": "Alicia en el país de las maravillas", "author": "Lewis Carol" },
            { "id": 2, "name": "Peter Pan", "author": "J. M. Barrie" },
            { "id": 3, "name": "La isla del tesoro", "author": "Robert L. Stevenson" },
            { "id": 4, "name": "El fantasma de Canterville", "author": "Oscar Wilde" }
        ]

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