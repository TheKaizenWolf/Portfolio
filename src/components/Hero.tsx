"use client";
import React from "react";
import styled from "styled-components";
import { SHeadingPrimary, SLink, SParagraph } from "./base/styles/Typography";
import { blinkCaret, typing } from "./base/styles/Animations";
import { Container, SFlex } from "./base/styles/Layout";

import { motion } from "framer-motion";
import { useMediaQuery } from "@react-hook/media-query";
import Image from "next/image";

const SHeroSection = styled(Container)`
  margin-bottom: 250px;
  @media (max-width: 1024px) {
    margin-bottom: 150px;
  }
`;

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
    img {
      width: 100%;
    }
  }
`;

const SHeroParagraph = styled(SParagraph)`
  max-width: 500px;
  margin-bottom: 30px;
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

function Hero() {
  const isMobile = useMediaQuery("only screen and (max-width: 1024px)");
  return (
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
              I specialize in the <strong>Javascript</strong> ecosystem. My main
              focus is{" "}
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
          <Image alt="Coding" width="200" height="350" src="/coding.svg" />
        </motion.div>
      </SHero>
    </SHeroSection>
  );
}

export default Hero;
