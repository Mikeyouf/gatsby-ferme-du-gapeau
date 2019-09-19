import React from 'react'
import styled from 'styled-components'

import bckImage from '../../img/fdg5.jpg'

const Bloc = styled.div`
    background-color: #eee;
    width: 100%;

    img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
    }

    :nth-child(2) {
        background-color: #000000;
        display: flex;
        align-items: center;
    }
`

const BlocTexte = styled.div`
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: justify;
    font-family: 'poppins';
    padding: 1em;
    margin-left: -3.5em;
    margin-right: 3.5em;

    h2 {
        color: ${props => props.theme.colors.primary};
        font-family: 'great vibes';
        margin: 0;
    }

    h3 {
        color: #fff;
        text-transform: uppercase;
        font-family: 'josefin sans';
        margin-top: -15px;
    }

    p {
        color: #808080;
        font-size: 15px;
        line-height: 27px;
    }
`

const BlocHistoire = () => (
    <>
        <Bloc>
            <img src={bckImage} alt="ferme du gapeau"/>
        </Bloc>
        <Bloc>
            <BlocTexte>
                <h2>Découvrez</h2>
                <h3>notre histoire</h3>
                <p>
                    L’établissement est à vocation agricole en production propre (cuisine, livraison de repas et de cocktail,  maraîchage, espaces verts). Les ateliers proposés ont été créés au fil du temps, et sont à ce jour investis par 76 travailleurs handicapés.<br/>
                    Depuis  2014, les ateliers sont organisés en :
                    <ul>
                        <li>Pôle Restauration (Cuisine – salle – Livraison)</li>
                        <li>Pôle Vert (Maraichage, Espaces Verts)</li>
                    </ul>
                </p>
            </BlocTexte>
        </Bloc>
    </>
)

export default BlocHistoire