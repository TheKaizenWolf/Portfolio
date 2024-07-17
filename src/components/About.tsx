"use client";
import React from "react";
import styled from "styled-components";
import { Container, SFlex } from "./base/styles/Layout";
import { SHeadingTertiary, SLink, SParagraph } from "./base/styles/Typography";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 30px;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
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

function About() {
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  return (
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
                Hi there! I'm Raul, a Software Engineer based in Columbus, Ohio.
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
  );
}

export default About;
