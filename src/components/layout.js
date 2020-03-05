import React from 'react';
import { Helmet } from 'react-helmet';

import styled from 'styled-components';
import { Link } from 'gatsby';
import { slide as Menu } from 'react-burger-menu';
import tw from 'tailwind.macro';
import Header from './header';
import useSiteMetadata from '../hooks/use-metadata';
import './layout.css';

const Inner = styled.div.attrs({
  className: 'sm:px-6 md-px-8 lg:px-12 xl:px-16',
})``;

const MenuLink = styled(Link).attrs({
  className: 'text-3xl text-white pb-6 font-bold',
})``;
const Footer = styled.div.attrs({
  className: 'mt-8 p-2 bg-purple-800 text-center',
})`
  h1 {
    ${tw`text-2xl text-white`}
    font-family: 'Proxima Nova Black'
  }
`;

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"
        />
      </Helmet>
      <Menu>
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/blog/">Blog</MenuLink>
        <MenuLink to="/about/">About</MenuLink>
      </Menu>
      <Header />
      <Inner>{children}</Inner>
      <Footer>
        <h1>Copyright © 2019 Raul Saavedra. All rights reserved. </h1>
      </Footer>
    </div>
  );
};

export default Layout;
