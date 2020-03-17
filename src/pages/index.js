import React from 'react';
import Layout from '../components/layout';
import Hero from '../components/HomePage/hero';
import Services from '../components/HomePage/services';
import Technologies from '../components/HomePage/technologies';
import Projects from '../components/HomePage/projects';

const Index = () => (
  <Layout>
    <Hero />
    <Services />
    <Technologies />
    <Projects />
  </Layout>
);
export default Index;
