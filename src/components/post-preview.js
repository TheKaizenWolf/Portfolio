import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { StyledLink } from '../pages/blog';

const StyledArticle = styled.article.attrs({
  className: 'mb3 pb3 pt3 bb bw1 purple',
})`
  display: grid;
  grid-template-columns: 1fr 6fr;
`;

const PostImageContainer = styled(Link).attrs({})`
  width: 150px;
  margin: 0rem 2rem 0 0;
`;

const PostPreview = ({ post }) => (
  <StyledArticle>
    <PostImageContainer to={post.slug}>
      <img className="shadow-3 dim" src={post.image} alt={post.title} />
    </PostImageContainer>
    <div>
      <h3 className="f2 mt0 mb0 light-purple underline">{post.title}</h3>
      <p className="f4 black">{post.excerpt}</p>
      <StyledLink to={post.slug}>Read this post →</StyledLink>
    </div>
  </StyledArticle>
);

export default PostPreview;
