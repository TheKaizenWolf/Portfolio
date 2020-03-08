import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import tw from 'tailwind.macro';
import Nav from './nav';

const StyledHeader = styled.header.attrs({
  className: 'bg-purple-800 px-2',
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
  .logo {
    ${tw`text-4xl text-bold no-underline text-white pl-3`}
    font-family: 'Proxima Nova Black'
  }
`;
const Header = () => (
  <StyledHeader>
    <div className="bar p-3 text-center">
      <Link className="logo" to="/">
        Raul Saavedra
      </Link>
      <Nav />
    </div>
  </StyledHeader>
);

export default Header;
