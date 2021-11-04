import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { blinkCaret, typing } from '../components/base/styles/Animations';
import {
  Container,
  SBox,
  SFlex,
  SGrid,
} from '../components/base/styles/Layout';
import {
  SHeadingPrimary,
  SHeadingTertiary,
  SParagraph,
} from '../components/base/styles/Typography';
import Layout from '../components/Layout';
import { styled } from '../stitches';

const SHero = styled('div', {
  display: 'grid',
  gridTemplateColumns: '3fr 3fr',
  paddingTop: '200px',
  gap: '10px',
  alignItems: 'center',
  overflow: 'hidden',
  marginBottom: '250px',
  '> div': {
    display: 'grid',
    gap: '30px',
  },
  '> div:nth-child(2)': {
    overflow: 'hidden',
  },
});
const SAbout = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  marginBottom: '200px',
});
const Home: NextPage = () => {
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.75,
  });
  return (
    <Layout>
      <Container size="large">
        <SHero>
          <motion.div
            initial={{ opacity: 0 }}
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
                animationDelay: '0.7s',
              }}
            >
              I am a Frontend Developer
            </SHeadingPrimary>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.1, duration: 0.75 }}
            >
              <SParagraph css={{ maxWidth: '500px', marginBottom: '30px' }}>
                I specialize in the <strong>Javascript</strong> ecosystem. My
                main focus is React with <strong>Next.js</strong> and React
                Native with <strong>Expo</strong>. I also have worked with
                <strong> Node.js, GraphQL and Prisma</strong>.
              </SParagraph>
              <SFlex
                css={{
                  gap: '20px',
                  img: {
                    background: 'white',
                    padding: '3px',
                    borderRadius: '10px',
                    width: '40px',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      background: '$redMedium',
                    },
                  },
                }}
              >
                <a href="https://github.com/raulsaavedra">
                  <img src="github.png" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/raul-s-3138a6153/">
                  <img src="linkedin.png" alt="linkedin" />
                </a>
              </SFlex>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: -40, opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <Image width="200px" height="350px" src="/coding.svg" />
          </motion.div>
        </SHero>
      </Container>
      <Container size="medium">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: aboutInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <SAbout ref={aboutRef}>
            <div>
              <SHeadingTertiary css={{ marginBottom: '10px' }}>
                About me
              </SHeadingTertiary>
              <SParagraph>
                <strong>I am Raul Saavedra</strong>, and I currently live in
                Santiago, Chile. I have a passion for building user interfaces
                that are captivating, performant, and accessible. I am currently
                working as a Frontend Developer at MEAT, where I have worked on
                projects for clients such as{' '}
                <strong>GAC Motor, Sinotruk, Komatsu, and PC Factory.</strong>
                <br />
                <br />
                <strong>In my free time</strong>, I love to practice martial
                arts, go to the gym, play video games, and read books. 🏋️ 🎮📚
              </SParagraph>
            </div>
            <div>
              <SFlex
                css={{
                  justifyContent: 'center',
                  position: 'relative',
                  '.normal': {
                    width: '350px',
                    height: 'auto',
                    overflow: 'hidden',
                    borderRadius: '20px',
                    position: 'relative',
                  },
                  '.absolute': {
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '350px',
                    transform: 'translateX(20%)',
                    filter: 'blur(150px)',
                  },
                }}
              >
                <img className="absolute" src="/me.jpeg" />
                <img className="normal" src="/me.jpeg" />
              </SFlex>
            </div>
          </SAbout>
        </motion.div>
      </Container>
    </Layout>
  );
};

export default Home;
