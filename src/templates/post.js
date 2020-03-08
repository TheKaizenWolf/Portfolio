import React from 'react';
import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Title } from '../pages/blog';

const StyledP = styled.p.attrs({
  className: 'text-xl font-bold text-gray-700 my-2',
})``;
const StyledImg = styled.img.attrs({
  className: 'shadow-xl border-pink-800 border-4',
})``;
const components = {
  p: StyledP,
  img: StyledImg,
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
    <div className="lg:px-4 text-center">
      <Title className="lg:text-center lg:mx-48 mx-4">
        {post.frontmatter.title}
      </Title>
      <p className="text-xl text-white inline-block bg-pink-800 rounded-full p-2 mb-2 mt-0">
        Posted on <b>{post.frontmatter.date}</b>
      </p>
      <MDXProvider components={components}>
        <MDXRenderer>{post.body}</MDXRenderer>
      </MDXProvider>
    </div>
  </Layout>
);

export default PostTemplate;
