import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Title } from './blog';

const AboutContainer = styled.div.attrs({
  className: 'tc flex-l flex-row-l justify-center mb4',
})``;
const AboutContent = styled.p.attrs({
  className: 'f3 fw6 black-70 lh-copy ph4 lh-copy',
})`
  @media (min-width: 60rem) {
    max-width: 550px;
  }
`;
const AboutMeImg = styled.img.attrs({
  className: 'br4',
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
    <Title className="tc-l mh6-l">About me...!</Title>
    <AboutContainer>
      <AboutMeImg src="/img/me.jpeg" />
      <AboutContent>
        Hello! My name is <AboutLink>Raul</AboutLink> and I am a software
        engineer currently living in{' '}
        <AboutLink href="https://en.wikipedia.org/wiki/Chile">Chile</AboutLink>
        . I love to code, to travel, and to pet dogs. <br />I follow the{' '}
        <AboutLink href="https://en.wikipedia.org/wiki/Kaizen">
          Kaizen
        </AboutLink>{' '}
        philosophy, which translates to continuous improvement everyday. <br />I
        have been coding for two years, but my passion started when I built my{' '}
        <AboutLink href="https://thekaizenwolf.github.io/roboamigos/">
          first
        </AboutLink>{' '}
        React site, then software development became for me a way of life, a way
        to bring amazing ideas become reality.
      </AboutContent>
    </AboutContainer>
  </Layout>
);

export default About;
