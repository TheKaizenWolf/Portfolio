import React from 'react';
import styled from 'styled-components';
import {
  FaLinkedinIn,
  FaCommentDots,
  FaDesktop,
  FaMoneyBill,
  FaDev,
  FaCheckCircle,
  FaCoins,
} from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const StyledHeading = styled.h1.attrs({
  className: 'f1 fw8',
})`
  font-family: 'Proxima Nova Black';
`;
const StyledSectionHeading = styled.h1.attrs({
  className:
    'f1 fw8 tc pv3 white bg-purple mh6-l br-pill bb b--light-purple bw3',
})`
  font-family: 'Proxima Nova Black';
  @media (max-width: 30rem) {
    font-size: 2.5rem;
  }
`;
const StyledHeroContainer = styled.div.attrs({
  className: 'relative flex flex-row justify-center items-center tc',
})`
  height: 67vh;
  overflow: hidden;
`;
const StyledHeroHContainer = styled.div.attrs({
  className: 'flex flex-column animated bounceInLeft bg-purple br-pill pa4 ',
})``;
const HeroImageContainer = styled.div.attrs({
  className: 'animated bounceInRight',
})`
  width: 500px;
  margin: 0 auto;

  @media (max-width: 75rem) {
    display: none;
  }
`;
const StyledFaDesktop = styled(FaDesktop).attrs({
  className: 'pl3 dark-pink v-mid dib f2 tc pt2',
})``;
const StyledFaCommentDots = styled(FaCommentDots).attrs({
  className: 'pl3 dark-pink v-mid dib f2 tc pt2',
})``;
const StyledFaMoneyBill = styled(FaMoneyBill).attrs({
  className: 'pl3 dark-pink v-mid dib f2 tc pt2',
})``;
const StyledFaDev = styled(FaDev).attrs({
  className: 'pl3 dark-pink v-mid dib f2 tc pt2',
})``;
const StyledFaCheckCirle = styled(FaCheckCircle).attrs({
  className: 'pl3 dark-pink v-mid dib f2 tc pt2',
})``;
const StyledFaCoins = styled(FaCoins).attrs({
  className: 'pl3 dark-pink v-mid dib f2 tc pt2',
})``;
const StyledRow = styled.div.attrs({
  className:
    'bg-purple ph2 bb bt bw3 b--light-purple flex flex-row-l flex-column justify-center animated fadeIn delay-1s br4 ',
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-flow: row;
  justify-items: center;
  @media (max-width: 75rem) {
    grid-template-columns: 1fr;
  }
`;

const StyledRowContainer = styled.div.attrs({
  className: 'bg-white ma3 mb3 tc ph2 ba b--light-purple bw2 grow br4',
})`
  @media (max-width: 30rem) {
    max-width: 300px;
  }
`;

const StyledRowHeading = styled.h1.attrs({
  className: 'mb0 white br-pill bg-light-purple pv2 mh4',
})`
  font-family: 'Proxima Nova Black';
  font-size: 2rem;
  @media (max-width: 30rem) {
    font-size: 1.5rem;
  }
`;

const StyledRowP = styled.p.attrs({
  className: 'f4 ph3 black-40',
})`
  font-family: 'Proxima Nova Black';
`;

const TechnologiesContainer = styled.div.attrs({
  className: '',
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const TechnologiesP = styled.p.attrs({ className: 'f3 white' })`
  font-family: 'Proxima Nova Black';
`;
const TechnologyContainer = styled.div.attrs({
  className: 'grow ma3-l ma1',
})`
  img {
    width: 300px;
  }
  @media (max-width: 60rem) {
    img {
      width: 200px;
    }
  }
  @media (max-width: 30rem) {
    img {
      width: 100px;
    }
  }
`;

const ProjectImage = styled.img.attrs({
  className: 'grow bb bt bw5 b--light-purple',
})`
  width: 31.5rem;
`;

const ProjectContainer = styled.div.attrs({
  className: '',
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Project = styled.div.attrs({
  className: 'bg-purple br4 shadow-3 ma2',
})`
  max-width: 400px;
  @media (max-width: 60rem) {
    max-width: 300px;
  }
`;
const ProjectPDiv = styled.div.attrs({
  className: 'pt2 pb2',
})``;

const ProjectP = styled.div.attrs({
  className: 'f4 white ph3 pb3 lh-copy',
})`
  font-family: 'Proxima Nova Black';
`;

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
        <StyledHeroHContainer className="">
          <div className="flex justify-center">
            <StyledHeading className="w-100 ph2 white">
              I Am A Front-End Developer
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
          <StyledFaDev />
          <StyledRowP>
            I build projects with a great focus on{' '}
            <a href="" className="light-purple no-underline">
              scalability
            </a>{' '}
            and <a className="light-purple no-underline">performance</a>. My
            skills will bring your project to the top.
          </StyledRowP>
        </StyledRowContainer>
        <StyledRowContainer>
          <StyledRowHeading>Communication</StyledRowHeading>
          <StyledFaCommentDots />
          <StyledFaCheckCirle />

          <StyledRowP>
            <a className="light-purple no-underline">
              Communication is the most important{' '}
            </a>{' '}
            part of a project. We will use
            <a href="https://trello.com/en" className="blue no-underline">
              {' '}
              Trello
            </a>{' '}
            and{' '}
            <a
              href="https://slack.com/intl/en-cl/"
              className="green no-underline"
            >
              Slack
            </a>{' '}
            in order to communicate effectively.
          </StyledRowP>
        </StyledRowContainer>
        <StyledRowContainer>
          <StyledRowHeading>Pricing</StyledRowHeading>
          <StyledFaMoneyBill />
          <StyledFaCoins />
          <StyledRowP>
            <a className="light-purple no-underline">Need flexible pricing?</a>{' '}
            Negotiable prices, and hourly, daily and fixed rates are accepted.
            You will get the best out of your investment.
          </StyledRowP>
        </StyledRowContainer>
      </StyledRow>
      <div className="tc pt2">
        <StyledSectionHeading className="">Technologies</StyledSectionHeading>
        <div className="bg-light-purple br-pill pv2-l pv3 ph5-l ph3 mb3 mh5-l bb b--pink bw3">
          <TechnologiesP>
            I am a <a className="light-blue">JAMStack specialist</a> with a big
            passion for delivering excellent static and dynamic user
            experiences. Including integrations with{' '}
            <a className="light-green">Cloud CMS, lambda functions</a>, whatever
            your needs, I will bring a{' '}
            <a className="light-green">complete, secure and great performing</a>{' '}
            product.
          </TechnologiesP>
        </div>
        <TechnologiesContainer>
          <TechnologyContainer>
            <img src="img/html.png" />
            <StyledHeading className="f3 bg-light-purple white br-pill pa2">
              HTML
            </StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/css.png" />
            <StyledHeading className="f3 bg-light-purple white br-pill pa2">
              CSS
            </StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/javascript.png" />
            <StyledHeading className="f3 bg-light-purple white br-pill pa2">
              Javascript
            </StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/react.png" />
            <StyledHeading className="f3 bg-light-purple white br-pill pa2">
              React
            </StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/typescript.png" />
            <StyledHeading className="f3 bg-light-purple white br-pill pa2">
              Typescript
            </StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/apollo.png" />
            <StyledHeading className="f3 bg-light-purple white br-pill pa2">
              Apollo
            </StyledHeading>
          </TechnologyContainer>
          <TechnologyContainer>
            <img src="img/graphql.png" />
            <StyledHeading className="f3 bg-light-purple white br-pill pa2">
              GraphQL
            </StyledHeading>
          </TechnologyContainer>
        </TechnologiesContainer>
      </div>
      <div className="tc pt2">
        <StyledSectionHeading>My Projects</StyledSectionHeading>
        <ProjectContainer className="">
          <Project>
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
          </Project>
          <Project>
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
          </Project>
          <Project>
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
          </Project>
          <Project>
            <StyledHeading className="white pt3 f2 f1-m f1-l">
              Hacker News
            </StyledHeading>
            <ProjectImage src="img/hacker-clone.png" />
            <ProjectPDiv>
              <ProjectP>
                This is a Hacker News clone that uses React.js + Material UI +
                Node.js + Express + MongoDB and it is fully dockerized.
              </ProjectP>
            </ProjectPDiv>
          </Project>
        </ProjectContainer>
      </div>
    </Layout>
  );
};
export {
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
  ProjectP,
  ProjectPDiv,
  ProjectContainer,
};
export default Index;
