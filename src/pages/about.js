import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Title } from './blog';

const AboutContent = styled.p.attrs({
  className: 'f3 fw6 black-70 tc lh-copy',
})``;
const About = () => (
  <Layout>
    <Title className="tc-l mh6-l">About me...!</Title>
    <AboutContent>
      Hello! My name is Raul and I am a software engineer currently living in
      Chile. I love to code, to travel, and to pet dogs. <br />I follow the
      Kaizen philosophy, which translates to continuous improvement everyday.
    </AboutContent>
  </Layout>
);

export default About;
