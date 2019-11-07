import React from 'react';
import { Helmet } from 'react-helmet';
import 'tachyons';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import Header from './Header';
import useSiteMetadata from '../hooks/useSiteMetadata';

import './Layout.css';

const Inner = styled.div.attrs({
  className: 'ph6-l ph4-m tc-m',
})``;

const MenuLink = styled(Link).attrs({
  className: 'f3 white link pb4 fw8',
})``;

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/about/">About</MenuLink>
      </Menu>
      <Header />
      <Inner>{children}</Inner>
    </div>
  );
};

export default Layout;
