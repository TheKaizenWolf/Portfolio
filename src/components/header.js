import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Nav from './nav';

const Logo = styled(Link).attrs({
  className: 'f2 fw8 no-underline white',
})`
  font-family: 'Proxima Nova Black';
`;

const StyledHeader = styled.header.attrs({
  className: 'bg-purple',
})`
  .bar {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 60em) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
  }
`;
const Header = () => (
  <StyledHeader>
    <div className="bar pa3 tc">
      <Logo className="pl3" to="/">
        Kaizen Web Arts
      </Logo>
      <Nav />
    </div>
  </StyledHeader>
);

export default Header;
