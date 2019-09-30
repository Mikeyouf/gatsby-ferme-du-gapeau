import React from 'react'
import styled from 'styled-components'

import phone from '../../img/phone.svg'
import map from '../../img/map.svg'
import clock from '../../img/clock.svg'
import actu from '../../img/actu.jpg'

const Bloc = styled.div`
    border: 1px solid black;
    flex-basis: 0;
    flex-grow: 1;
    padding: 2em 0.7em;
    background-color: rgba(0, 0, 0, 0.9);
    color: #fff;
    display: flex;
    align-items: start;

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
        padding: 1em 0.7em;
        height: 100px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    }

    h2 {
        font-size: 16px;
        color: #fff;
        font-family: 'josefin sans';
        margin-top: 0;

        @media (max-width: ${props => props.theme.breakpoints.phone}) {
            font-size: 15px;
        }
    }

    p {
        color: #808080;
        font-size: 15px;
        font-family: 'poppins';

        @media (max-width: ${props => props.theme.breakpoints.phone}) {
            font-size: 14px;
        }
    }

    img {
        margin-right: 10px;
    }

    :nth-child(4) {
        flex-grow: 1.8;
        position: relative;

        @media (max-width: ${props => props.theme.breakpoints.phone}) {
            padding: 0;
        }

        .bloc-actu {
            position: absolute;
            padding: 1.2em;
            bottom: 0;
            right: 0;
            width: 100%;
            box-sizing: border-box;
            height: 260px;
            background-color: ${props => props.theme.colors.primary};

            @media (max-width: ${props => props.theme.breakpoints.phone}) {
                position: relative;
                padding: 0.8em;
            }

            h3 {
                font-size: 20px;
                margin-top: 0;
                text-align: center;
                color: #fff;
                font-family: 'josefin sans';
                font-weight: 500;
                text-transform: uppercase;
                z-index: 5;

                @media (max-width: ${props => props.theme.breakpoints.phone}) {
                    font-size: 18px;
                    margin-bottom: 14px;
                }
            }

            .actualites {
                display: flex;
                align-items: center;

                @media (max-width: ${props => props.theme.breakpoints.phone}) {
                    width: 100%;
                    height: 200px;
                    display: block;
                    position: relative;
                }

                img {
                    width: 120px;
                    height: 120px;

                    @media (max-width: ${props => props.theme.breakpoints.phone}) {
                        width: 100%;
                        height: 100%;
                    }
                }

                p {
                    color: #fff;
                    text-align: justify;
                    font-family: 'poppins';
                    
                    @media (max-width: ${props => props.theme.breakpoints.phone}) {
                        position: absolute;
                        bottom: 0;
                        background-color: rgba(0, 0, 0, 0.7);
                        padding: 0.5em;
                        margin: 0;
                        font-size: 13px;
                    }
                }
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
            <div className="bloc-actu">
                <h3>Actualités</h3>
                <div className="actualites">
                    <img src={actu} alt="actualité"/>
                    <p>Ainsi s'est transmise la présidence de l'AVATH entre monsieur Michel CAPONY et monsieur Pierre LAPORTE, notre nouveau Président.</p>
                </div>
            </div>
        </Bloc>
    </>
)

export default BlocInfos