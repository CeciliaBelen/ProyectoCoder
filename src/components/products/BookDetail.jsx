import React from 'react';
import List from './List';
import AddToCart from '../addToCart/AddToCart';
import Btn from '../addToCart/Button';

function BookDetail(props) {
    const { data } = props;
    return (
        <div key={data.id}>
            <List />
            <AddToCart />
            <Btn sign={"Comprar"} />
        </div>
    )
}

export default BookDetail