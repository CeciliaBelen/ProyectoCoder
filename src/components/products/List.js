import React from 'react';
import {NavLink} from 'react-router-dom';

function List(props) {
    return (
        <ul>
            {props.data.map(element => <li key={element.id} id={element.id}>
                <NavLink to={"/products/:id"}>"{element.name}" de {element.author}</NavLink></li>)}
        </ul>
    )
}

export default List