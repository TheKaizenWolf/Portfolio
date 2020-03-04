import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Title } from '../pages/blog';

const StyledP = styled.p.attrs({ className: 'f4 fw6 black-70' })``;
const components = {
  p: StyledP,
};
export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <div className="ph4-l tc">
      <Title className="tc-l mh6-l">{post.frontmatter.title}</Title>
      <p className="f4 white dib bg-dark-pink br-pill pa2 ma0">
        Posted on <b>{post.frontmatter.date}</b>
      </p>
      <MDXProvider components={components}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </div>
  </Layout>
);

export default PostTemplate;
