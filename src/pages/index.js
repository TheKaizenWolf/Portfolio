import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/PostPreview';
import Hero from '../components/Hero';

const Title = styled.h1.attrs({
  className: 'f2 fw8 bb bw2',
})``;

const StyledLink = styled(Link).attrs({
  className: 'f4 fw8 link dim',
})``;
const Index = () => {
  const posts = usePosts();
  return (
    <Layout>
      <Hero />
      <Title>My Latest Posts</Title>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default Index;
export { Title, StyledLink };
