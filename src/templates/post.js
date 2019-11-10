import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Layout from '../components/Layout';

const StyledP = styled.p.attrs({ className: 'f4' })``;

const components = {
  p: StyledP,
};

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      body
    }
  }
`;

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout>
    <div className="ph4-l tc">
    <h1 className="f2 purple underline">{post.frontmatter.title}</h1>
    <p className="f4">
      Posted by <b>{post.frontmatter.author}</b>
    </p>
    <MDXProvider components={components}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </MDXProvider>
    </div>
  </Layout>
);

export default PostTemplate;
