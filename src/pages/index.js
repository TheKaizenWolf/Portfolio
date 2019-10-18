import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/Layout';

const Title = styled.h1.attrs({
  className: 'f2 fw8 bb bw2',
})``;

const StyledLink = styled(Link).attrs({
  className: 'f3 fw8 link dim',
})``;

const StyledText = styled.p.attrs({
  className: 'f4 fw5 garamond',
})``;
const Index = () => (
  <Layout>
    <Title>Hello Frontend Masters!</Title>
    <StyledText>Welcome to my blog, here you can see my entries: </StyledText>
    <StyledLink to="/about/">About Me →</StyledLink>
  </Layout>
);

export default Index;
export { Title, StyledLink };
