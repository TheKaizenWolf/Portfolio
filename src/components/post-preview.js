import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { Link } from 'gatsby';
import tw from 'tailwind.macro';
import { StyledLink } from '../pages/blog';

const StyledArticle = styled.article.attrs({
  className: 'mb-3 pb-3 pt-3',
})`
  border-bottom: 3px solid #a463f2;
  display: grid;
  grid-template-columns: 1fr 6fr;
`;

const PostImageContainer = styled(Link).attrs({})`
  width: 150px;
  margin: 0rem 2rem 0 0;
`;
const PostTitle = styled.h3.attrs({
  className: 'text-4xl mt-0 mb-0 underline',
})`
  color: #a463f2;
  font-family: 'Proxima Nova Black';
`;
const PostPreview = ({ post }) => (
  <StyledArticle>
    <PostImageContainer to={post.slug}>
      <Image
        className="shadow-xl"
        fluid={post.image.sharp.fluid}
        alt={post.title}
      />
    </PostImageContainer>
    <div>
      <PostTitle>{post.title}</PostTitle>
      <p className="text-xl black mt-3 mb-3">{post.excerpt}</p>
      <StyledLink to={post.slug}>Read this post →</StyledLink>
    </div>
  </StyledArticle>
);

export default PostPreview;
