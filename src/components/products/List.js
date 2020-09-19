import React from 'react';

function List(props) {
    return (
        <ul>
            {props.data.map(element => <li key={element.id} id={element.id}>"{element.name}" de {element.author}</li>)}
        </ul>
    )
}

export default List