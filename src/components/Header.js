import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'
import { darken, lighten } from 'polished'
import { Link } from 'gatsby'


import theme from '../../config/theme'

import logo from '../../static/logo2.png'
import Navigation from './Navigation'

const Wrapper = styled.header`
  background: linear-gradient(
    45deg,
    ${props => darken(0.1, props.theme.colors.primary)},
    ${props => lighten(0.1, props.theme.colors.primary)}
  );
  max-height: 90px!important;
  grid-column: 1 / -1;
  padding: 0 4rem;
  box-shadow: inset 0px -10px 30px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0 2rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 0 0.5rem;
  }
`

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: flex;
  height: 70px;
  a {
    color: ${props => props.theme.colors.white};
    font-size: 1.2rem;
    &:hover {
      opacity: 0.85;
      color: ${props => props.theme.colors.white};
    }
  }
`

const rotate360 = keyframes`
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(360deg);
  }
`

const AppLogo = styled.img`
  animation: ${rotate360} infinite 25s linear;
  height: 80px;
  margin: auto 0;
  &:hover {
    animation: ${rotate360} infinite 3s linear;
  }
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 60px;
  }
`

const NomAssoc = styled.div`
  min-width: 120px;
  color: #fff;
  margin: auto 0;
  font-family: 'josefin sans';
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    min-width: 100px;
    font-size: 0.8rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    min-width: 80px;
    font-size: 0.6rem;
  }
`

const Header = ({ children }) => (
  <Wrapper>
    <Content>
      <Link to="/" style={{ margin: 'auto 0' }}>
        <AppLogo src={logo} alt="logo" />
      </Link>
      <NomAssoc>FDG - AVATH</NomAssoc>
      <Navigation/>
    </Content>
  </Wrapper>
)

export default Header

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}
