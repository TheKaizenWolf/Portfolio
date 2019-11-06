import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/Layout';

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
    <h1 className="f2 purple underline">{post.frontmatter.title}</h1>
    <p className="f4">
      Posted by <b>{post.frontmatter.author}</b>
    </p>
    <MDXRenderer>{post.body}</MDXRenderer>
  </Layout>
);

export default PostTemplate;
