import React from 'react'
import styled from 'styled-components'

const Bloc = styled.div`
    background-color: ${props => props.theme.colors.primary};
    width: 100%;

`

const BlocTexte = styled.div`
    color: #fff;
    background-color: ${props => props.theme.colors.primary};
    text-align: center;
    font-family: 'poppins';
    padding: 1em;

    h2 {
        text-transform: uppercase;
        font-size: 16px;
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
                <h2>pôle travail</h2>
                <p>Il est divisé en deux pôles: le pôle vert, avec les activités de maraichage et d'espaces verts. Et le pôle blanc, avec la restauration et le service en salle.</p>
            </BlocTexte>
        </Bloc>
        <Bloc>
            <BlocTexte>
                <h2>pôle social</h2>
            </BlocTexte>
        </Bloc>
        <Bloc>
            <BlocTexte>
                <h2>pôle administratif</h2>
            </BlocTexte>
        </Bloc>
    </>
)

export default BlocPoles