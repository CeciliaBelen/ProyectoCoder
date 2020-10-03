import React, { useState } from 'react';

export const CartContext = React.createContext([]);

export const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [book, setBook] = useState([]);

    return (
        <CartContext.Provider value={[cart, setCart, book, setBook]}>
            {props.children}
        </CartContext.Provider>
    )
}