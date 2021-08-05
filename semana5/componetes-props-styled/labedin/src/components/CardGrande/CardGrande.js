import React from 'react';

function CardGrande(props) {
    return (
        <div className="BigcardContainer">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default CardGrande;