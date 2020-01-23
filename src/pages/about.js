import React from 'react';
import Layout from '../components/layout';
import { Title } from './blog';

const About = () => (
  <Layout>
    <Title className="tc-m">About me...!</Title>
    <p className="f4 fw3 tc lh-copy">
      Hello! My name is Raul and I am a software engineer currently living in
      Saint Louis, MO. I love to code, to travel, and to pet dogs. <br />I
      follow the Kaizen philosophy, which translates to continuous improvement
      everyday.
    </p>
  </Layout>
);

export default About;
