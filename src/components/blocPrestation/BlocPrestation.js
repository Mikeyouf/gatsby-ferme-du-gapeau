import React, { useState } from 'react'
import styled from 'styled-components'

import bckImage1 from '../../img/fdg5.jpg'
import bckImage2 from '../../img/fdg4.jpg'
import bckImage3 from '../../img/fdg6.jpg'
// import bckImage from '../../img/fdg5.jpg'

const Bloc = styled.div`
    background-color: #000;
    width: 100%;

    :nth-child(1) {
        background-color: #000000;
        display: flex;
        align-items: center;
    }
`

const BlocImage = styled.div`
    background-color: #000;
    width: 100%;
    height: 480px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
        display: none;
    }

    div {
        width: 240px;
        height: 160px;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    p {
        color: white;
        text-align: center;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 1em 0;
    }

    .visible {
        opacity: 1;
        transform: translateY(-120px);
        transition: all 0.4s ease-in;
    }

    .hidden {
        opacity: 0;
        transition: all 0.4s ease-in;
    }

`

const BlocTexte = styled.div`
    color: #fff;
    background-color: #000;
    text-align: right;
    font-family: 'poppins';
    padding: 1em;

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
        box-sizing: border-box;
    }

    h2 {
        color: ${props => props.theme.colors.primary};
        font-family: 'great vibes';
        margin: 0;

        @media (max-width: ${props => props.theme.breakpoints.phone}) {
            text-align: center;
        }
    }

    h3 {
        color: #fff;
        text-transform: uppercase;
        font-family: 'josefin sans';
        margin-top: -15px;

        @media (max-width: ${props => props.theme.breakpoints.phone}) {
            text-align: center;
        }
    }

    p {
        color: #808080;
        font-size: 15px;
        line-height: 27px;
        text-align: justify;

        @media (max-width: ${props => props.theme.breakpoints.phone}) {
            font-size: 14px;
            line-height: 25px;
        }
    }
`



const BlocPrestation = () => {
    const [ isHover, setIsHover ] = useState(1)
    const changeHover = id => {
        setIsHover(id)
    }

    return (
    <>
        <Bloc>
            <BlocTexte>
                <h2>Découvrez</h2>
                <h3>nos prestations</h3>
                <p>
                    Notre établissement propose différentes prestations de qualité tout au long de l'année.
                    Le pôle vert est divisé en deux secteurs diffénts, le maraichage et l'entretien des espaces
                    vert.
                    Le pôle restauration, propose des rapas le midi dans un cadre charmant. Il propose également
                    la création de cocktails et la location de salle de réunion avec un service de repas.
                </p>
            </BlocTexte>
        </Bloc>
        <BlocImage>
            <div onMouseEnter={() => changeHover(1)} onMouseLeave={() => setIsHover(false)} id="1">
                <img src={bckImage1} alt="ferme du gapeau"/>
                <p className={isHover === 1 ? 'visible' : 'hidden'} >Pôle travail</p>
            </div>
            <div onMouseEnter={() => changeHover(2)} onMouseLeave={() => setIsHover(false)} naidme="2">
                <img src={bckImage2} alt="ferme du gapeau"/>
                <p className={isHover === 2 ? 'visible' : 'hidden'}>Pôle restauration</p>
            </div>
            <div onMouseEnter={() => changeHover(3)} onMouseLeave={() => setIsHover(false)} id="3">
                <img src={bckImage3} alt="ferme du gapeau"/>
                <p className={isHover === 3 ? 'visible' : 'hidden'}>Pôle social</p>
            </div>
            <div onMouseEnter={() => changeHover(4)} onMouseLeave={() => setIsHover(false)} id="4">
                <img src={bckImage1} alt="ferme du gapeau"/>
                <p className={isHover === 4 ? 'visible' : 'hidden'}>Pôle administratif</p>
            </div>
        </BlocImage>
    </>
    )
}

export default BlocPrestation;