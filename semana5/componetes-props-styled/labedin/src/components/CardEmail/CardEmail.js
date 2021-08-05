import React from 'react'

function CardPequeno(props) {
    return (
        <div>
            <img>{props.imagem}</img>
            <h2>{props.email}</h2>
        </div>
    )
}

export default CardPequeno
