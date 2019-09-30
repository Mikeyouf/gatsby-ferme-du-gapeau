import React from 'react'
import styled from 'styled-components'

import bckImage from '../../img/fdg5.jpg'

const Bloc = styled.div`
    background-color: #eee;
    width: 100%;

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
        display: none;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;

        @media (max-width: ${props => props.theme.breakpoints.phone}) {
            display: none;
        }
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

    @media (max-width: ${props => props.theme.breakpoints.tabletPortrait}) {
        margin: 0;
        box-sizing: border-box;
    }

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
        margin: 0;
        box-sizing: border-box;
    }

    h2 {
        color: ${props => props.theme.colors.primary};
        font-family: 'great vibes';
        margin: 0;

        @media (max-width: ${props => props.theme.breakpoints.tabletPortrait}) {
            text-align: center;
            font-size: 2rem;
        }

        @media (max-width: ${props => props.theme.breakpoints.phone}) {
            text-align: center;
        }
    }

    h3 {
        color: #fff;
        text-transform: uppercase;
        font-family: 'josefin sans';
        margin-top: -15px;

        @media (max-width: ${props => props.theme.breakpoints.tabletPortrait}) {
            text-align: center;
            font-size: 1.8rem;
        }

        @media (max-width: ${props => props.theme.breakpoints.phone}) {
            text-align: center;
        }
    }

    p {
        color: #808080;
        font-size: 15px;
        
        @media (max-width: ${props => props.theme.breakpoints.tabletPortrait}) {
            font-size: 14px;
            line-height: 25px;
        }

        @media (max-width: ${props => props.theme.breakpoints.phone}) {
            font-size: 14px;
            line-height: 25px;
        }
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