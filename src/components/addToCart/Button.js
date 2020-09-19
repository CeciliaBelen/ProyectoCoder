import React from 'react'

function Btn(props) {
    return <button onClick={props.onClick}>{props.sign}</button>
};

export default Btn;