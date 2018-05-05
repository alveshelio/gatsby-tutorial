import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import logo from '../../images/logo.svg';

const HeaderWrapper = styled.div`
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
      <p>{data.site.siteMetadata.desc}</p>
      <p>{data.site.siteMetadata.title}</p>
      <Navigation>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </Navigation>
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
