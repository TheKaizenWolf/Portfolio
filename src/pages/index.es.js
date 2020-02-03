import React from 'react';
import styled from 'styled-components';
import {
  FaLinkedinIn,
  FaCommentDots,
  FaDesktop,
  FaMoneyBill,
} from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Layout from '../components/layout-es';
import {
  StyledHeroContainer,
  StyledHeroHContainer,
  HeroImageContainer,
  StyledFaDesktop,
  StyledFaCommentDots,
  StyledFaMoneyBill,
  StyledRow,
  StyledRowHeading,
  StyledHeading,
  StyledRowContainer,
  StyledRowP,
  TechnologiesContainer,
  TechnologyContainer,
  ProjectImage,
  ProjectPDiv,
  ProjectP,
  ProjectContainer,
} from './index';

const Index = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "indexhero.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <StyledHeroContainer>
        <StyledHeroHContainer>
          <div className="flex justify-center">
            <StyledHeading className="w-100 ph2 white">
              Soy un Desarrollador Full-Stack
            </StyledHeading>
          </div>
          <div className="flex justify-center">
            <a
              className="black"
              href="https://www.linkedin.com/in/raul-s-3138a6153/"
            >
              <FaLinkedinIn className="f1 bb bw3 grow pb2 mr4-l mr4 white" />
            </a>
            <a className="black" href="https://github.com/TheKaizenWolf">
              <GoMarkGithub className="f1 bb bw3 grow pb2 white" />
            </a>
          </div>
        </StyledHeroHContainer>
        <HeroImageContainer>
          <Image fluid={image.sharp.fluid} />
        </HeroImageContainer>
      </StyledHeroContainer>
      <StyledRow>
        <StyledRowContainer>
          <StyledRowHeading>Development</StyledRowHeading>
          <StyledFaDesktop />
          <StyledRowP>
            Tu projecto tendra una gran atención tanto como el front-end como el
            back-end.
          </StyledRowP>
        </StyledRowContainer>
        <StyledRowContainer>
          <StyledRowHeading>Communication</StyledRowHeading>
          <StyledFaCommentDots />
          <StyledRowP>
            We will use Trello and Slack in order to communicate effectively.
          </StyledRowP>
        </StyledRowContainer>
        <StyledRowContainer>
          <StyledRowHeading>Pricing</StyledRowHeading>
          <StyledFaMoneyBill />
          <StyledRowP>
            Need flexible pricing? Hourly or fixed prices are accepted.
          </StyledRowP>
        </StyledRowContainer>
      </StyledRow>
      <div className="tc pt2">
        <StyledHeading className="tc pv3 white bg-purple mh6-l">
          Technologies
        </StyledHeading>
        <TechnologiesContainer>
          <TechnologyContainer>
            <img src="img/html.png" />
            <StyledHeading className="f3">HTML</StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/javascript.png" />
            <StyledHeading className="f3">Javascript</StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/css.png" />
            <StyledHeading className="f3">CSS</StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/react.png" />
            <StyledHeading className="f3">React</StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/typescript.png" />
            <StyledHeading className="f3">Typescript</StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/apollo.png" />
            <StyledHeading className="f3">Apollo</StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/redux.png" />
            <StyledHeading className="f3">Redux</StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/nodejs.png" />
            <StyledHeading className="f3">Node.js</StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/graphql.png" />
            <StyledHeading className="f3">GraphQL</StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/docker.png" />
            <StyledHeading className="f3">Docker</StyledHeading>
          </TechnologyContainer>
        </TechnologiesContainer>
      </div>
      <div className="tc pt2">
        <StyledHeading className="tc pv3 white bg-purple mh6-l">
          My Projects
        </StyledHeading>
        <ProjectContainer className="">
          <div className="bg-purple">
            <StyledHeading className="white pt3 f2 f1-m f1-l">
              Raulfits
            </StyledHeading>
            <ProjectImage src="img/rafits.png" />
            <ProjectPDiv>
              <ProjectP>
                This project is a e-commerce store implementing a full CRUD API.
                It uses React, Apollo, GraphQL and Prisma.
              </ProjectP>
            </ProjectPDiv>
          </div>
          <div className="bg-purple">
            <StyledHeading className="white pt3 f2 f1-m f1-l">
              Face-App
            </StyledHeading>
            <ProjectImage src="img/face.png" />
            <ProjectPDiv>
              <ProjectP>
                This project is a face-recognition-app that utilizes the
                Clarifai API. It uses React, Node.js, and Express.
              </ProjectP>
            </ProjectPDiv>
          </div>
          <div className="bg-purple">
            <StyledHeading className="white pt3 f2 f1-m f1-l">
              Roboamigos
            </StyledHeading>
            <ProjectImage src="img/robo.png" />
            <ProjectPDiv>
              <ProjectP>
                This project is a React App that utilizes robohash for the
                robots, and fake JSON for their data.
              </ProjectP>
            </ProjectPDiv>
          </div>
        </ProjectContainer>
      </div>
    </Layout>
  );
};

export default Index;
