import React from 'react'
import styled from 'styled-components'

import phone from '../../img/phone.svg'
import map from '../../img/map.svg'
import clock from '../../img/clock.svg'

const Bloc = styled.div`
    border: 1px solid black;
    flex-basis: 0;
    flex-grow: 1;
    padding: 2em 0.7em;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    display: flex;
    align-items: start;

    h2 {
        font-size: 16px;
        color: #fff;
        font-family: 'josefin sans';
        margin-top: 0;
    }

    p {
        color: #808080;
        font-size: 15px;
        font-family: 'poppins';
    }

    img {
        margin-right: 10px;
    }

    :nth-child(4) {
        background-color: grey;
        flex-grow: 1.8;
        position: relative;

        div {
            position: absolute;
            padding: 1.2em;
            bottom: 0;
            right: 0;
            width: 100%;
            box-sizing: border-box;
            height: 260px;
            background-color: ${props => props.theme.colors.primary};

            h3 {
                font-size: 20px;
                margin-top: 0;
                text-align: center;
                color: #fff;
                font-family: 'josefin sans'
                font-weight: 500;
                text-transform: uppercase;
            }
        }
    }
`

const BlocInfos = () => (
    <>
        <Bloc>
            <img src={phone} alt="logo telephone"/>
            <div>
                <h2>04 94 27 86 10</h2>
                <p>Contactez-nous pour toute question</p>
            </div>
        </Bloc>
        <Bloc>
            <img src={map} alt="logo carte"/>
            <div>
                <h2>D258, Le Petit Beaulieu</h2>
                <p>83 210 Solliès-Pont</p>
            </div>
        </Bloc>
        <Bloc>
            <img src={clock} alt="logo horaire"/>
            <div>
                <h2>Ouvert du lundi au vendredi</h2>
                <p>De 8h à 16h30</p>
            </div>
        </Bloc>
        <Bloc>
            <div>
                <h3>Dernières nouvelles</h3>
            </div>
        </Bloc>
    </>
)

export default BlocInfos