import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Title } from '../pages/blog';

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
      <Title className="tc-l mh6-l">{data.gcms.post.title}</Title>
      <StyledImg src={data.gcms.post.image.url} alt={data.gcms.post.slug} />
      <p className="f4">
        Posted by <b>{data.gcms.post.author}</b>
      </p>
      <p className="f3 fw6 black-70">{data.gcms.post.content}</p>
    </div>
  </Layout>
);

export default PostTemplate;
