import React from 'react';
import { StyledLink } from '../pages/index';

const PostPreview = ({ post }) => (
  <article>
    <h3 className="f2 mb3 purple underline">{post.title}</h3>
    <p className="f4">{post.excerpt}</p>
    <StyledLink to={post.slug}>Read this post →</StyledLink>
  </article>
);

export default PostPreview;
