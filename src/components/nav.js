import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavLink = styled(Link).attrs({
  className: 'f3 fw8 tracked white dib pa2 ph4 link dn-m',
  activeClassName: 'underline',
})``;
const Nav = () => (
  <div className="flex justify-end">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about/" className="mr4">
      About
    </NavLink>
  </div>
);

export default Nav;
