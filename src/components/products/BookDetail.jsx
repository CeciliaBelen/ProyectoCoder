import React from 'react';
import AddToCart from '../addToCart/AddToCart';
import Btn from '../addToCart/Button';

function BookDetail(props) {
    // const { data } = props;
    return (
        <div key={props.id} id={props.id}>
            <div>
                <h2>{props.name}</h2>
                <h4>{props.author}</h4>
                <h4>${props.price}</h4>
                <h4>{props.description}</h4>
            </div>
            <AddToCart />
            <Btn sign={"Comprar"} />
        </div>
    )
}

export default BookDetail