import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import tw from 'tailwind.macro';
import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';

const Title = styled.h1.attrs({
  className:
    'text-4xl font-bold text-center lg:text-left bg-purple-800 rounded-full p-2 pl-3 my-4 text-white',
})`
  border-bottom: 5px solid #a463f2;
  font-family: 'Proxima Nova Black';
`;

const StyledLink = styled(Link).attrs({
  className: 'f4 fw8 link dim dark-pink',
})``;
const Index = () => {
  const posts = usePosts();
  return (
    <Layout>
      <Hero />
      <Title className="tc-m">My Latest Posts</Title>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};

export default Index;
export { Title, StyledLink };
