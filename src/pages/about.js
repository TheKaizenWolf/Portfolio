import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import Layout from '../components/layout';
import { Title } from './blog';

const AboutContainer = styled.div.attrs({
  className:
    'flex lg:flex-row flex-col justify-center items-center text-center mb4',
})`
  .content {
    ${tw`text-2xl font-bold text-gray-700 px-8`}
    @media (min-width: 60rem) {
      max-width: 550px;
    }
    .link {
      ${tw`hover:underline text-purple-700 cursor-pointer`}
    }
  }
  .image {
    ${tw`shadow-xl rounded-lg`}
    max-width: 350px;
  }
`;
const AboutContent = styled.p.attrs({
  className: 'f3 fw6 black-70 ph4 lh-copy',
})`
  @media (min-width: 60rem) {
    max-width: 550px;
  }
`;
const AboutMeImg = styled.img.attrs({
  className: 'shadow-3 br4 grow',
})`
  max-width: 350px;
`;
const AboutLink = styled.a.attrs({
  className: 'link underline-hover purple',
})`
  font-family: 'Proxima Nova Black';
`;
const About = () => (
  <Layout>
    <Title className="lg:text-center lg:mx-24">About me...!</Title>
    <AboutContainer>
      <div>
        <img className="image" src="/img/me.jpeg" alt="me" />
      </div>
      <div>
        <div className="content">
          Hello! My name is <AboutLink>Raul</AboutLink> and I am a software
          engineer currently living in{' '}
          <AboutLink href="https://en.wikipedia.org/wiki/Chile">
            Chile
          </AboutLink>
          . I love to code, to travel, and to pet dogs. <br />I follow the{' '}
          <AboutLink href="https://en.wikipedia.org/wiki/Kaizen">
            Kaizen
          </AboutLink>{' '}
          philosophy, which translates to continuous improvement everyday.{' '}
          <br />I have been coding for two years, but my passion started when I
          built my{' '}
          <AboutLink href="https://thekaizenwolf.github.io/roboamigos/">
            first
          </AboutLink>{' '}
          React site, then software development became a way of life for me, a
          way to bring amazing ideas to reality.
        </div>
      </div>
    </AboutContainer>
  </Layout>
);

export default About;
