import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const StyledP = styled.p.attrs({ className: 'f4' })``;

const components = {
  p: StyledP,
};
const StyledImg = styled.img.attrs({
  className: '',
})`
  max-width: 500px;
`;
export const query = graphql`
  query($slug: String!) {
    gcms {
      post(where: { slug: $slug }) {
        title
        image {
          url
        }
        author
        content
        slug
      }
    }
  }
`;

const PostTemplate = ({ data }) => (
  <Layout>
    <div className="ph4-l tc">
      <h1 className="f2 purple underline">{data.gcms.post.title}</h1>
      <StyledImg src={data.gcms.post.image.url} alt={data.gcms.post.slug} />
      <p className="f4">
        Posted by <b>{data.gcms.post.author}</b>
      </p>
      <p>{data.gcms.post.content}</p>
    </div>
  </Layout>
);

export default PostTemplate;
