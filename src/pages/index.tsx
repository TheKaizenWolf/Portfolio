import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { blinkCaret, typing } from '../components/base/styles/Animations';
import { Container } from '../components/base/styles/Layout';
import {
  SHeadingPrimary,
  SHeadingTertiary,
  SParagraph,
} from '../components/base/styles/Typography';
import Layout from '../components/Layout';
import { styled } from '../stitches';

const Hero = styled('div', {
  display: 'grid',
  gridTemplateColumns: '2fr 3fr',
  paddingTop: '200px',
  gap: '10px',
  alignItems: 'center',
  overflow: 'hidden',
  '> div': {
    display: 'grid',
    gap: '30px',
  },
});
const Home: NextPage = () => (
  <Layout>
    <Container size="large">
      <Hero>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <SHeadingPrimary
            css={{
              overflow: 'hidden',
              borderRight: '.15em solid $redMedium',
              whiteSpace: 'nowrap',
              margin: '0 auto',
              marginLeft: '0',
              animation: `${typing} 1.5s steps(80, end), ${blinkCaret} 0.75s step-end infinite`,
              animationFillMode: 'backwards',
              animationDelay: '0.75s',
            }}
          >
            I am a Frontend Developer
          </SHeadingPrimary>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.25, duration: 0.75 }}
          >
            <SParagraph>
              Based in <strong>Chile</strong>, I specialize in the Javascript
              ecosystem. I mainly work with React with <strong>Next.js</strong>,
              React Native with
              <strong> Expo</strong>, and <strong> Node.js</strong>.
            </SParagraph>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <Image width="200px" height="300px" src="/coding.svg" />
        </motion.div>
      </Hero>
    </Container>
  </Layout>
);

export default Home;
