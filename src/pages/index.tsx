import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useMediaQuery } from '@react-hook/media-query';
import { blinkCaret, typing } from '../components/base/styles/Animations';
import { Container, SFlex } from '../components/base/styles/Layout';
import {
  SButtonText,
  SHeadingPrimary,
  SHeadingTertiary,
  SParagraph,
} from '../components/base/styles/Typography';
import Layout from '../components/Layout';
import { styled } from '../stitches';
import Skills from '../components/Skills';
import { SButton } from '../components/base/styles/Button';

const SHero = styled('div', {
  display: 'grid',
  gridTemplateColumns: '3fr 3fr',
  paddingTop: '200px',
  gap: '10px',
  alignItems: 'center',
  overflow: 'hidden',
  '@bpMd': {
    paddingTop: '100px',
    gridTemplateColumns: '1fr',
  },
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
  gap: '30px',
  '@bpMd': {
    gridTemplateColumns: '1fr',
  },
});
const Home: NextPage = () => {
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const isMobile = useMediaQuery('only screen and (max-width: 1024px)');
  const skills = [
    {
      name: 'HTML',
      percentage: '85%',
      image: '/technologies/html.png',
    },
    {
      name: 'CSS (with Flex and Grid)',
      percentage: '85%',
      image: '/technologies/css.png',
    },
    {
      name: 'JavaScript',
      percentage: '75%',
      image: '/technologies/javascript.png',
    },
    {
      name: 'TypeScript',
      percentage: '60%',
      image: '/technologies/typescript.png',
    },
    {
      name: 'React',
      percentage: '80%',
      image: '/technologies/react.png',
    },
    {
      name: 'Next.js',
      percentage: '75%',
      image: '/technologies/nextjs.png',
    },
    {
      name: 'Styled Components (CSS in JS)',
      percentage: '85%',
      image: '/technologies/styled-components.png',
    },
    {
      name: 'Node.js',
      percentage: '40%',
      image: '/technologies/node.png',
    },
    {
      name: 'GraphQL',
      percentage: '30%',
      image: '/technologies/graphql.png',
    },
  ];
  return (
    <Layout>
      <Head>
        <title>Raul Saavedra | Home</title>
      </Head>
      <Container
        size="large"
        css={{ marginBottom: '250px', '@bpMd': { marginBottom: '150px' } }}
      >
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
                '@bpMd': {
                  animation: 'none',
                  overflow: 'visible',
                  whiteSpace: 'normal',
                  borderRight: 'none',
                },
              }}
            >
              I am a Frontend Developer
            </SHeadingPrimary>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isMobile ? 0 : 2.3, duration: 0.75 }}
            >
              <SParagraph css={{ maxWidth: '500px', marginBottom: '30px' }}>
                I specialize in the <strong>Javascript</strong> ecosystem. My
                main focus is React with <strong>Next.js.</strong> I also have
                worked with
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
            initial={{ x: isMobile ? 0 : 20, opacity: 0 }}
            animate={{
              x: isMobile ? 0 : -40,
              y: isMobile ? -30 : 0,
              opacity: 1,
            }}
            transition={{ duration: 0.75 }}
          >
            <Image width="200px" height="350px" src="/coding.svg" />
          </motion.div>
        </SHero>
      </Container>
      <Container
        size="medium"
        css={{ marginBottom: '250px', '@bpMd': { marginBottom: '150px' } }}
      >
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
                    maxWidth: '350px',
                    height: 'auto',
                    overflow: 'hidden',
                    borderRadius: '20px',
                    position: 'relative',
                    '@bpMd': {
                      maxWidth: '300px',
                    },
                    '@bpExSm': {
                      maxWidth: '250px',
                    },
                  },
                  '.absolute': {
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    maxWidth: '350px',
                    transform: 'translateX(20%)',
                    filter: 'blur(150px)',
                    '@bpMd': {
                      display: 'none',
                    },
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
      <Container size="medium" css={{ marginBottom: '100px' }}>
        <SHeadingTertiary css={{ marginBottom: '25px' }}>
          My Skills
        </SHeadingTertiary>
        <Skills skills={skills} />
      </Container>
      <Container
        size="medium"
        css={{ marginBottom: '150px', '@bpMd': { marginBottom: '50px' } }}
      >
        <SFlex css={{ justifyContent: 'center' }}>
          <SButton as="a" href="/cv.pdf" download>
            <SButtonText>Download CV</SButtonText>
          </SButton>
        </SFlex>
      </Container>
    </Layout>
  );
};

export default Home;
