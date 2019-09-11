import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavApp = styled.ul`
    width: 100%;
    color: #fff;
    align-self: center;
    display: flex;
    justify-content: right;
`

const LinkApp = styled.li`
    font-family: 'poppins';
    text-transform: uppercase;
    text-decoration: none;
    list-style: none;
    margin: 0 2em;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        margin: 0 1em;
    }

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
        display: none;
    }
    a {
        font-size: 0.9rem!important;
        @media (max-width: ${props => props.theme.breakpoints.tablet}) {
            font-size: 0.8rem!important;
        }

        @media (max-width: ${props => props.theme.breakpoints.tabletPortrait}) {
            font-size: 0.6rem!important;
        }
    }
`

const Navigation = () => (
    <NavApp>
        <LinkApp>
            <Link to="/">à propos</Link>
        </LinkApp>
        <LinkApp>
            <Link to="/">pôle vert</Link>
        </LinkApp>
        <LinkApp>
            <Link to="/">pôle restauration</Link>
        </LinkApp>
        <LinkApp>
            <Link to="/">pôle social</Link>
        </LinkApp>
        <LinkApp>
            <Link to="/">contact</Link>
        </LinkApp>
    </NavApp>
)

export default Navigation