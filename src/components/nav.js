import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavLink = styled(Link).attrs({
  className:
    'text-3xl text-white font-medium tracking-medium text-white inline-block py-1 px-8',
  activeClassName: 'underline',
})`
  @media (max-width: 60em) {
    display: none;
  }
  font-family: 'Proxima Nova Black';
`;
const Nav = () => (
  <div className="flex justify-end">
    <NavLink className="" to="/">
      Home
    </NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/about" className="mr-6">
      About
    </NavLink>
  </div>
);

export default Nav;
