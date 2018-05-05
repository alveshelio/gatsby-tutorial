import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';
import Img from 'gatsby-image'

import logo from '../../images/logo.svg';

const HeaderWrapper = styled.div`
    height: 70vh;
    overflow: hidden;
    position: relative;
    background: #524763;
    margin-bottom: 1.45rem;
    
    h1 {
      img {
        height: 80px;
      }
    }
`

const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    position: relative;
    z-index: 2;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
  }
  ul li a {
    text-decoration: none;
    color: #ccc;
  }
`

const Header = ({ data }) => (
  <HeaderWrapper>
    <HeaderContainer>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt='Level Up Tuts' />
        </Link>
      </h1>
      <Navigation>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </Navigation>
    </HeaderContainer>
    <Img
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
      sizes={data.background.sizes} src={data.background.src}
    />
  </HeaderWrapper>
)

export default Header
