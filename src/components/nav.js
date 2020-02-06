import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavLink = styled(Link).attrs({
  className: 'f3 fw8 tracked white dib pa2 ph4 link',
  activeClassName: 'underline',
})`
  @media (max-width: 60em) {
    display: none;
  }
  font-family: 'Proxima Nova Black';
`;
const Nav = () => (
  <div className="flex justify-end">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/blog">Blog</NavLink>
    <NavLink to="/about" className="mr4">
      About
    </NavLink>
  </div>
);

export default Nav;
