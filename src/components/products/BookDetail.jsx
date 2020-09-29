import React from 'react';
import AddToCart from '../addToCart/AddToCart';
import Btn from '../addToCart/Button';

function BookDetail(props) {
    // const { data } = props;
    return (
        <div>
            {props.data.map(element => <div key={element.id} id={element.id}>
                <h4>{element.name}</h4>
                <h5>{element.author}</h5>
                <h5>${element.price}</h5>
                <h5>{element.description}</h5>
                <AddToCart />
                <Btn sign={"Comprar"} />
            </div>)}
        </div>
    )
}

export default BookDetail