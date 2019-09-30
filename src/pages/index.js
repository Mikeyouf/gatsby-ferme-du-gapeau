import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled, {keyframes, ThemeProvider} from 'styled-components'
// import { useInterval } from '../components/useInterval'

import { Layout, Wrapper, Button } from '../components'
import BlocInfos from '../components/blocInfos/BlocInfos'
import BlocHistoire from '../components/blocHistoire/BlocHistoire'
import BlocPoles from '../components/blocPoles/BlocPoles'
import BlocPrestation from '../components/blocPrestation/BlocPrestation'

// import bck1 from '../../static/fdg4.jpg'
import bck2 from '../img/fdg5.jpg'
// import bck3 from '../../static/fdg6.jpg'

const Content = styled.div`
  grid-column: 1 / -1;
  box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 0;
  }
  overflow: hidden;

  .infos {
    display: flex;
    height: 160px;
    margin-top: -80px;
    background-color: white;

    @media (max-width: ${props => props.theme.breakpoints.tabletPortrait}) {
      flex-wrap: wrap;
      height: 140px;
    }

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      flex-direction: column;
      height: 590px;
    }
  }

  .histoire {
    display: flex;
    height: 480px;

    @media (max-width: ${props => props.theme.breakpoints.tabletPortrait}) {
      height: 400px;
    }

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      display: block;
      height: 420px;

      div {
        height: 100%;
      }
    }
  }

  .poles {
    display: flex;
    height: 420px;

    @media (max-width: ${props => props.theme.breakpoints.tabletPortrait}) {
      height: 400px;
    }

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      flex-direction: column;
      height: 912px;
    }
  }

  .prestation {
    display: flex;
    height: 480px;

    @media (max-width: ${props => props.theme.breakpoints.tabletPortrait}) {
      
    }

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      display: block;
      height: 400px;

      div {
        height: 100%;
      }
    }
  }


`

const arrivee = keyframes`
 0% {
  transform: scaleY(0.4);
 }
 100% {
  transform: scaleY(1);
 }

`

const Hero = styled.div`
  grid-column: 2;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  color: ${props => props.theme.colors.grey.dark};
  background-image: url(${bck2});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 850px;
  display: flex;
  justify-content: center;
  align-content: center;

  h1, h3 {
    margin: 0;
    color: ${props => props.theme.colors.white};
    font-family: 'josefin sans';
    text-align: center;
    text-shadow: 3px 3px 1px ${props => props.theme.colors.grey.default};
  }

  h1 {
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.9rem;
      margin-bottom: 1em;
    }
  }

  h3 {
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.2rem;
    }
  }

  div:nth-child(1) {
    margin: auto 0;
    width: 100%;

    div {
      animation: ${arrivee} 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
      margin-top: 4em;
      display: flex;
      justify-content: center;

      @media (max-width: ${props => props.theme.breakpoints.phone}) {
        margin-top: 2em;
        flex-direction: column;
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 0;
    min-height: 500px;
  }

  p {
    font-size: 1.68rem;
    margin-top: -1rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 1.45rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
      font-size: 1.25rem;
    }
  }
`

const BoutonCTA1 = styled(Button)`
  width: 280px;
  text-align: center;
  margin: 0 1em;
  padding: 0.5rem 1.75rem;
  text-shadow: 3px 3px 1px ${props => props.theme.colors.grey.light};
  font-family: 'poppins';
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    margin: 0 auto;
    margin-bottom: 1em;
  }

`

const BoutonCTA2 = styled(BoutonCTA1)`
  background: transparent;
  border: 3px solid ${props => props.theme.colors.primary};
`

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => (
  <Layout>
    <Wrapper>
      <Content>
        <Hero>
          <div>
            <h1>La Ferme du Gapeau</h1>
            <h3>Entreprise d'aide et de soutien par le travail</h3>
            <div>
              <BoutonCTA1>Demander un devis</BoutonCTA1>
              <BoutonCTA2>Nous contacter</BoutonCTA2>
            </div>
          </div>
        </Hero>
          <section className="infos">
            <BlocInfos/>
          </section>
          <section className="histoire">
            <BlocHistoire/>
          </section>
          <section className="poles">
            <BlocPoles/>
          </section>
          <section className="prestation">
            <BlocPrestation/>
          </section>
      </Content>
    </Wrapper>
  </Layout>
)

export default IndexPage

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export const IndexQuery = graphql`
  query IndexQuery {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "MM/DD/YYYY")
          categories
        }
        excerpt(pruneLength: 200)
        timeToRead
      }
    }
  },
`
