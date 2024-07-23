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
                Hi there! I'm Raul, a Software Engineer with 5 years of
                experience based in Columbus, Ohio.
              </strong>{" "}
              I specialize in frontend development with{" "}
              <SLink target="_blank" href="https://reactjs.org/">
                React
              </SLink>{" "}
              and{" "}
              <SLink target="_blank" href="https://nextjs.org/">
                Next.js
              </SLink>
              . I am also proficient with{" "}
              <SLink target="_blank" href="https://nodejs.org/">
                Node.js
              </SLink>
              , and{" "}
              <SLink target="_blank" href="https://expressjs.com/">
                Express
              </SLink>
              , Databases (SQL and NoSQL) and headless CMS integrations (such as{" "}
              <SLink target="_blank" href="https://www.sanity.io/">
                Sanity.io
              </SLink>
              ).
              <br />
              <br />
              Additionally, I am an expert at CSS, allowing me to build
              beautiful and complex layouts.
              <br />
              <br />I currently work at{" "}
              <SLink target="_blank" href="https://xepelin.com">
                Xepelin
              </SLink>
              , where I built and maintained the website to convert the users to
              our app. I recently moved to the product team to expand my
              skill-set participating in a Scrum development process, working
              with core business logic, and doing full stack development.
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
