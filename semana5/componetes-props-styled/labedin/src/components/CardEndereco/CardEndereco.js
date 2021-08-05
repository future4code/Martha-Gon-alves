import React from 'react'

function CardEndereco(props) {
    return (
        <div>
            <img>{props.imagem}</img>
            <h2>{props.endereco}</h2>
        </div>
    )
}

export default CardEndereco
