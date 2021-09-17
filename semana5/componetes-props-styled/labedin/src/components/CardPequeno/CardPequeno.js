import React from 'react'
import styled from 'styled-components'


const SmallCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;
    width: 40vw;
`

const SmallCardImg = styled.img`
    display: flex;
    align-items: center;
    width: 80px;
    padding: 30px 30px;
    margin: 2px;
`

const SmallCardH4 = styled.h4`
    display: flex;
    align-items: center;
    margin: 2px;
    font-size: 15px;
`

const SmallCardP = styled.p`
    display: flex;
    align-items: center;
    margin: 2px;
    font-size: 1vw;
`


function CardPequeno(props) {
    return (
        <SmallCardContainer>
            <SmallCardImg src={ props.imagem }/>
            <SmallCardH4>{ props.email }</SmallCardH4>
            <SmallCardH4>{ props.endereco }</SmallCardH4>
            <SmallCardP>{ props.texto }</SmallCardP>

        </SmallCardContainer>
    )
}

export default CardPequeno
