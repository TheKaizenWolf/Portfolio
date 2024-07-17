"use client";

import Image from "next/legacy/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@react-hook/media-query";
import { Container, SFlex } from "../src/components/base/styles/layout";
import {
  SButtonText,
  SHeadingPrimary,
  SHeadingTertiary,
  SLink,
  SParagraph,
} from "../src/components/base/styles/typography";
import Layout from "../src/components/layout";
import Skills from "../src/components/skills";
import { SButton } from "../src/components/base/styles/button";
import styled, { keyframes } from "styled-components";
import { blinkCaret, typing } from "src/components/base/styles/animations";

const SHero = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr;
  padding-top: 200px;
  gap: 10px;
  align-items: center;
  overflow: hidden;
  @media (max-width: 1024px) {
    padding-top: 100px;
    grid-template-columns: 1fr;
  }
  > div {
    display: grid;
    gap: 30px;
  }
  > div:nth-child(2) {
    overflow: hidden;
  }
`;

const SAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 30px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const SAnimatedHeadingPrimary = styled(SHeadingPrimary)`
  overflow: hidden;
  border-right: 0.15em solid var(--colors-red-medium);
  white-space: nowrap;
  margin: 0 auto;
  margin-left: 0;
  animation: ${typing} 1.5s steps(80, end), ${blinkCaret} 0.7s step-end infinite;
  animation-fill-mode: backwards;
  animation-delay: 0.5s;
  @media (max-width: 1024px) {
    animation: none;
    overflow: visible;
    white-space: normal;
    border-right: none;
  }
`;

const SHeroLinks = styled(SFlex)`
  gap: 20px;
  img {
    background: white;
    padding: 3px;
    border-radius: 10px;
    width: 40px;
    transition: all 0.2s ease-in-out;
    &:hover {
      background: var(--colors-red-medium);
    }
  }
`;

const SHeroSection = styled(Container)`
  margin-bottom: 250px;
  @media (max-width: 1024px) {
    margin-bottom: 150px;
  }
`;

const SHeroParagraph = styled(SParagraph)`
  max-width: 500px;
  margin-bottom: 30px;
`;

const SAboutSection = styled(Container)`
  margin-bottom: 250px;
  @media (max-width: 1024px) {
    margin-bottom: 150px;
  }
`;

const SAboutHeading = styled(SHeadingTertiary)`
  margin-bottom: 10px;
`;

const SAboutImage = styled(SFlex)`
  justify-content: center;
  position: relative;
  .normal {
    max-width: 350px;
    height: auto;
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    @media (max-width: 1024px) {
      max-width: 300px;
    }
    @media (max-width: 425px) {
      max-width: 250px;
    }
  }
  .absolute {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 350px;
    transform: translateX(20%);
    filter: blur(150px);
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;

const SSkillsSection = styled(Container)`
  margin-bottom: 100px;
`;

const SSkillsHeading = styled(SHeadingTertiary)`
  margin-bottom: 25px;
`;

const SCVSection = styled(Container)`
  margin-bottom: 150px;
  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }
  > div {
    justify-content: center;
  }
`;

const Home = () => {
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const isMobile = useMediaQuery("only screen and (max-width: 1024px)");
  const skills = [
    {
      name: "HTML",
      percentage: "85%",
      image: "/technologies/html.png",
    },
    {
      name: "CSS (with Flex and Grid)",
      percentage: "85%",
      image: "/technologies/css.png",
    },
    {
      name: "Styled Components (CSS in JS)",
      percentage: "85%",
      image: "/technologies/styled-components.png",
    },
    {
      name: "JavaScript (with ES6)",
      percentage: "75%",
      image: "/technologies/javascript.png",
    },
    {
      name: "TypeScript",
      percentage: "70%",
      image: "/technologies/typescript.png",
    },
    {
      name: "React (with Hooks)",
      percentage: "85%",
      image: "/technologies/react.png",
    },
    {
      name: "Next.js",
      percentage: "90%",
      image: "/technologies/nextjs.png",
    },
    {
      name: "Sanity.io",
      percentage: "90%",
      image: "/technologies/sanity.jpg",
    },
    {
      name: "Node.js",
      percentage: "60%",
      image: "/technologies/node.png",
    },
    {
      name: "React Native",
      percentage: "50%",
      image: "/technologies/react.png",
    },
    {
      name: "Expo",
      percentage: "40%",
      image: "/technologies/expo.png",
    },
  ];
  return (
    <Layout>
      <SHeroSection size="large">
        <SHero>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <SAnimatedHeadingPrimary>
              I am a Software Engineer
            </SAnimatedHeadingPrimary>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: isMobile ? 0 : 2.3, duration: 0.75 }}
            >
              <SHeroParagraph>
                I specialize in the <strong>Javascript</strong> ecosystem. My
                main focus is{" "}
                <SLink target="_blank" href="https://reactjs.org/">
                  React
                </SLink>
                ,{" "}
                <SLink target="_blank" href="https://nextjs.org/">
                  Next.js,
                </SLink>
                ,{" "}
                <SLink target="_blank" href="https://nodejs.org/">
                  Node.js
                </SLink>{" "}
                and the headless CMS{" "}
                <SLink target="_blank" href="https://www.sanity.io/">
                  Sanity.io
                </SLink>
                .
              </SHeroParagraph>
              <SHeroLinks>
                <a target="_blank" href="https://github.com/raulsaavedra">
                  <img src="github.png" alt="github" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/raul-s-3138a6153/"
                >
                  <img src="linkedin.png" alt="linkedin" />
                </a>
              </SHeroLinks>
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
            <Image width="200" height="350" src="/coding.svg" />
          </motion.div>
        </SHero>
      </SHeroSection>
      <SAboutSection size="medium">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: aboutInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <SAbout ref={aboutRef}>
            <div>
              <SAboutHeading>About me</SAboutHeading>
              <SParagraph>
                <strong>
                  Hi there! I'm Raul, a Software Engineer based in Columbus,
                  Ohio.
                </strong>{" "}
                I love creating dynamic, user-friendly web applications. I
                specialize in frontend development with{" "}
                <SLink target="_blank" href="https://reactjs.org/">
                  React
                </SLink>{" "}
                and{" "}
                <SLink target="_blank" href="https://nextjs.org/">
                  Next.js
                </SLink>
                . I also have extensive experience working with{" "}
                <SLink target="_blank" href="https://www.sanity.io/">
                  Sanity.io
                </SLink>{" "}
                as a headless CMS and backend development with{" "}
                <SLink target="_blank" href="https://nodejs.org/">
                  Node.js.
                </SLink>
                <br />
                <br />
                Additionally, I have expertise in CSS, enabling me to build
                beautiful layouts that enhance user experiences. You can see
                examples of my work on Xepelin's{" "}
                <SLink target="_blank" href="https://xepelin.com">
                  Homepage
                </SLink>{" "}
                and{" "}
                <SLink target="_blank" href="https://xepelin.com/mx/xsuite">
                  Xepelin XSuite
                </SLink>
                , which I built in collaboration with the design team.
                <br />
                <br />
                Currently, <strong>I’m working at Xepelin</strong>, building
                scalable and efficient full-stack solutions.
              </SParagraph>
            </div>
            <div>
              <SAboutImage>
                <img alt="Raul Saavedra" className="absolute" src="/me.jpeg" />
                <img alt="Raul Saavedra" className="normal" src="/me.jpeg" />
              </SAboutImage>
            </div>
          </SAbout>
        </motion.div>
      </SAboutSection>
      <SSkillsSection size="medium">
        <SSkillsHeading>My Skills</SSkillsHeading>
        <Skills skills={skills} />
      </SSkillsSection>
      <SCVSection size="medium">
        <SFlex>
          <SButton as="a" target="_blank" href="/cv.pdf" download>
            <SButtonText>Download CV</SButtonText>
          </SButton>
        </SFlex>
      </SCVSection>
    </Layout>
  );
};

export default Home;
