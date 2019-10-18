import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { Title, StyledLink } from './index';

const about = () => (
  <Layout>
    <Title>Welcome to the about page!</Title>

    <StyledLink to="/">Home →</StyledLink>
  </Layout>
);

export default about;
