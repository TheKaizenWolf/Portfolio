import React from 'react';
import Insta from '../components/Insta';
import Layout from '../components/Layout';
import { Title } from './index';

const about = () => (
  <Layout>
    <Title className="tc-m">About me...!</Title>
    <p className="f4 tc-m">
      Hello! My name is Raul and I am a software engineer currently living in
      Saint Louis, MO. I love to code, to travel, and to pet dogs.
    </p>
    <Insta />
  </Layout>
);

export default about;
