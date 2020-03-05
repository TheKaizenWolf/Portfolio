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
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import tw from 'tailwind.macro';
import Layout from '../components/layout';

const StyledHeroContainer = styled.div.attrs({
  className: 'relative flex flex-row justify-center items-center text-center',
})`
  height: 67vh;
  overflow: hidden;

  .left-section {
    ${tw`flex flex-col rounded-full bg-purple-800 p-8 py-12`}
  }
  .right-section {
    width: 500px;
    margin: 0 auto;

    @media (max-width: 75rem) {
      display: none;
    }
  }
  .icons {
    ${tw`text-6xl hover:text-gray-500 text-white pb-2`}
    border-bottom: 0.40rem solid white
  }
`;

const StyledHeading = styled.h1.attrs({
  className: 'text-5xl font-bold',
})`
  font-family: 'Proxima Nova Black';
`;

const StyledRow = styled.div.attrs({
  className:
    'bg-purple-800 px-1 mb-5 flex lg:flex-row flex-col justify center animatedFadeIn delay-1s rounded-lg',
})`
  display: grid;
  border-top: 5px solid #a463f2;
  border-bottom: 5px solid #a463f2;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-flow: row;
  justify-items: center;
  @media (max-width: 75rem) {
    grid-template-columns: 1fr;
  }

  .row-container {
    ${tw`bg-white m-4 py-5 mb-3 text-center px-6 rounded-lg`}
    border: 5px solid #A463F2;
    .row-heading {
      ${tw`mb-0 text-white rounded-full py-1 mx-4`}
      background: #A463F2;
      font-family: 'Proxima Nova Black';
      font-size: 2rem;
      @media (max-width: 30rem) {
        font-size: 1.5rem;
      }
    }
    .row-icon {
      ${tw`mx-2 text-pink-600 align-middle inline-block text-4xl text-center mt-2 mb-4`}
    }
    .row-text {
      ${tw`text-xl px-2 text-gray-600 leading-tight`}
      font-family: 'Proxima Nova Black';
      .purple-link {
        ${tw`no-underline font-black`}
        color: #A463F2;
      }

      .red-link {
        ${tw`text-red-500 no-underline`}
      }
      .green-link {
        ${tw`text-green-500 no-underline`}
      }
    }
  }
`;

const TechnologiesSection = styled.div.attrs({
  className: 'tc pt2',
})`
  .heading {
    ${tw`text-5xl text-bold text-center py-5 text-white bg-purple-800 lg:mx-24 rounded-full`}
    border-bottom: 8px solid #A463F2;
    font-family: 'Proxima Nova Black';
    @media (max-width: 30rem) {
      font-size: 2.5rem;
    }
  }
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
  .p {
  }
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
const ProjectSection = styled.div.attrs({
  className: 'tc pt2',
})`
  .heading {
    ${tw`text-5xl text-bold text-center py-5 text-white bg-purple-800 lg:mx-24 rounded-full`}
    border-bottom: 8px solid #A463F2;
    font-family: 'Proxima Nova Black';
    @media (max-width: 30rem) {
      font-size: 2.5rem;
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
        <div className="left-section animated bounceInLeft">
          <div className="flex justify-center">
            <StyledHeading className="width-full px-2 text-white mb-4">
              I Am A Front-End Developer
            </StyledHeading>
          </div>
          <div className="flex justify-center">
            <a href="https://www.linkedin.com/in/raul-s-3138a6153/">
              <FaLinkedinIn className="icons lg:mr-4" />
            </a>
            <a href="https://github.com/TheKaizenWolf">
              <GoMarkGithub className="icons" />
            </a>
          </div>
        </div>
        <div className="right-section animated bounceInRight">
          <Image fluid={image.sharp.fluid} />
        </div>
      </StyledHeroContainer>
      <StyledRow>
        <div className="row-container">
          <h1 className="row-heading">Development</h1>
          <FaDesktop className="row-icon" />
          <FaDev className="row-icon" />
          <p className="row-text">
            I build projects with a great focus on{' '}
            <a href="" className="purple-link">
              scalability
            </a>{' '}
            and <a className="purple-link">performance</a>. My skills will bring
            your project to the top.
          </p>
        </div>
        <div className="row-container">
          <h1 className="row-heading">Communication</h1>
          <FaCommentDots className="row-icon" />
          <FaCheckCircle className="row-icon" />
          <p className="row-text">
            <a className="purple-link">Communication is the most important </a>{' '}
            part of a project. We will use
            <a href="https://trello.com/en" className="red-link">
              {' '}
              Todoist
            </a>{' '}
            and{' '}
            <a href="https://slack.com/intl/en-cl/" className="green-link">
              Slack
            </a>{' '}
            in order to communicate effectively.
          </p>
        </div>
        <div className="row-container">
          <h1 className="row-heading">Pricing</h1>
          <FaMoneyBill className="row-icon" />
          <FaCoins className="row-icon" />
          <p className="row-text">
            <a className="light-purple no-underline">
              I charge by value-based pricing.
            </a>{' '}
            The services I provide are priced by the success I bring to your
            business.
          </p>
        </div>
      </StyledRow>
      <TechnologiesSection>
        <h1 className="heading">Technologies</h1>
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
      </TechnologiesSection>
      <ProjectSection>
        <h1 className="heading">My Projects</h1>
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
      </ProjectSection>
    </Layout>
  );
};
export default Index;
