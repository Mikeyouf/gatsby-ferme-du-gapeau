import React from 'react'
import PropTypes from 'prop-types'
import styled, {keyframes} from 'styled-components'
import { darken, lighten } from 'polished'

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
  margin-left: -1rem;
  margin-right: -1rem;
  padding: 1rem 4rem;
  box-shadow: inset 0px -10px 30px 0px rgba(0, 0, 0, 0.1);
`

const Content = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  display: flex;

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
  animation: ${rotate360} infinite 30s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`

const Header = ({ children }) => (
  <Wrapper>
    <Content>
      <AppLogo src={logo} alt="logo" />
      <Navigation/>
    </Content>
  </Wrapper>
)

export default Header

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}
