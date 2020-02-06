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
  className: 'f1 fw8 tc pv3 white bg-purple mh6-l br-pill ',
})`
  font-family: 'Proxima Nova Black';
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
})``;

const StyledRowHeading = styled.h1.attrs({
  className: 'mb0 white br-pill bg-light-purple pv2 mh4',
})`
  font-family: 'Proxima Nova Black';
  font-size: 2rem;
`;

const StyledRowP = styled.p.attrs({
  className: 'f4 fw6 ph3 black-50',
})`
  font-family: 'Proxima Nova Black';
`;

const TechnologiesContainer = styled.div.attrs({
  className: '',
})`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  justify-content: center;
  @media (max-width: 45rem) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 65rem) and (min-width: 45rem) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const TechnologyContainer = styled.div.attrs({
  className: 'grow',
})``;

const ProjectImage = styled.img.attrs({
  className: 'grow bb bt bw5 b--light-purple',
})`
  width: 31.5rem;
`;

const ProjectPDiv = styled.div.attrs({
  className: 'pt2 pb2',
})``;

const ProjectContainer = styled.div.attrs({
  className: '',
})`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  justify-items: center;
`;

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
              I Am A Full-Stack Developer
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
            I build projects, front-end and back-end with a focus on scalability
            and performance. My skills will bring your project to the top.
          </StyledRowP>
        </StyledRowContainer>
        <StyledRowContainer>
          <StyledRowHeading>Communication</StyledRowHeading>
          <StyledFaCommentDots />
          <StyledFaCheckCirle />

          <StyledRowP>
            Communication is the most important part of a project. We will use
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
            Need flexible pricing? Negotiable prices, and hourly, daily and
            fixed rates are accepted. You will get the best out of your
            investment.
          </StyledRowP>
        </StyledRowContainer>
      </StyledRow>
      <div className="tc pt2">
        <StyledSectionHeading className="">Technologies</StyledSectionHeading>
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
        <StyledSectionHeading>My Projects</StyledSectionHeading>
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
