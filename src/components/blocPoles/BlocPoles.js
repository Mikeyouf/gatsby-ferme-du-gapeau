import React from 'react'
import styled, {keyframes} from 'styled-components'
import { Link } from 'gatsby'

import worker from '../../img/worker.svg'
import people from '../../img/people.svg'
import book from '../../img/book.svg'

const flip = keyframes`
 0% {
    transform: rotateY(0);
 }
 100% {
    transform: rotateY(180deg);
 }

 0% {
    transform: rotateY(0);
 }
 100% {
    transform: rotateY(180deg);
 }

`

const Bloc = styled.div`
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const BlocTexte = styled.div`
    color: #fff;
    background-color: ${props => props.theme.colors.primary};
    text-align: center;
    font-family: 'poppins';
    padding: 1em;

    img {
        border: 1px solid black;
        width: 80px;
        height: 100px;
        padding: 0.6em;
        margin-bottom: 0.7em;

        &:hover {
            animation: ${flip} 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
        }
    }

    h2 {
        text-transform: uppercase;
        font-size: 18px;
        font-family: 'josefin sans';
        line-height: 28px;
    }

    p {
        font-size: 15px;
        font-family: 'poppins';
        color: #000;
        line-height: 27px;
    }

`

const BlocPoles = () => (
    <>
        <Bloc>
            <BlocTexte>
                <Link to="/">
                    <img src={worker} alt="item pole travail"/>
                </Link>
                <h2>pôle travail</h2>
                <p>Il est divisé en deux parties: le pôle vert, avec les activités de maraichage et d'espaces verts. Et le pôle restauration, avec la restauration, le service en salle et la confection de cocktails.</p>
            </BlocTexte>
        </Bloc>
        <Bloc>
            <BlocTexte>
                <Link to='/'>
                    <img src={people} alt="item pole social"/>
                </Link>
                <h2>pôle social</h2>
                <p>Il est composé d'un foyer occupationnel, d'un foyer d'hébergement et d'un service de suivi des personnes (SAVS)</p>
            </BlocTexte>
        </Bloc>
        <Bloc>
            <BlocTexte>
                <Link tp='/'>
                    <img src={book} alt="item pole administratif"/>
                </Link>
                <h2>pôle administratif</h2>
                <p>Il s'agit de la gestion administrative de l'esat et de ses foyers. Il est divisé en deux: un secrétariat pour pôle travail et un autre pour le pôle social</p>
            </BlocTexte>
        </Bloc>
    </>
)

export default BlocPoles