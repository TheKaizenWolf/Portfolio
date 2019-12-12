import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import Layout from '../components/layout';


const StyledHeroContainer = styled.div.attrs({
  className: 'relative flex flex-row justify-center items-center tc',
})`
  height: 70vh;
  overflow: hidden;
`;

const HeroImageContainer = styled.div.attrs({})`
  width: 500px;
  margin: 0 auto;

  @media (max-width: 60rem) {
    display: none;
  }
`;


const StyledRow = styled.div.attrs({
  className: 'bg-purple ph2',
})``;

const StyledRowHeading = styled.h1.attrs({
  className: 'f3 purple',
})`
  font-family: 'Proxima Nova Black';
`;
const StyledHeading = styled.h1.attrs({
  className: 'f1 fw8',
})`
  font-family: 'Proxima Nova Black';
`;
const StyledRowContainer = styled.div.attrs({
  className: 'bg-white ma3 mb3 tc ph2 ba b--black bw2 grow',
})``;
const StyledRowP = styled.p.attrs({
  className: '',
})``;


const ProjectImage = styled.img.attrs({
  className: 'shadow-3 grow bb bt bw5 b--pink',
})`
  width: 31.5rem;
`;

const ProjectPDiv = styled.div.attrs({
  className: 'pt2 pb2',
})``;

const ProjectContainer = styled.div.attrs({
  className: '',
})`
  div {
    margin: 0 auto;
    width: 600px;
  }
  @media (max-width: 45rem) {
    div {
      width: 350px;
    }
  }
`;

const ProjectP = styled.div.attrs({
  className: '',
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
        <div className="flex flex-column animated bounceInLeft">
          <div className="flex justify-center">
            <StyledHeading className="w-100 ph2">
              I Am A Full-Stack Developer
            </StyledHeading>
          </div>
          <div className="flex justify-center">
            <FaLinkedinIn className="f2 pr3" />
            <GoMarkGithub className="f2" />
          </div>
        </div>
        <HeroImageContainer className="animated bounceInRight ">
          <Image fluid={image.sharp.fluid} />
        </HeroImageContainer>
      </StyledHeroContainer>
      <StyledRow className="flex flex-row-l flex-column justify-center animated fadeIn delay-1s ">
        <StyledRowContainer>
          <StyledRowHeading>Development</StyledRowHeading>
          <StyledRowP className="f4 fw5">
            Your project will have a great attention to detail, front-end and
            back-end.
          </StyledRowP>
        </StyledRowContainer>
        <StyledRowContainer>
          <StyledRowHeading>Communication</StyledRowHeading>
          <StyledRowP className="f4 fw5">
            We will use Trello and Slack in order to communicate effectively.
          </StyledRowP>
        </StyledRowContainer>
        <StyledRowContainer>
          <StyledRowHeading>Pricing</StyledRowHeading>
          <StyledRowP className="f4 fw5">
            Need flexible pricing? Hourly or fixed prices are accepted.
          </StyledRowP>
        </StyledRowContainer>
      </StyledRow>
      <div className="tc pt2">
        <StyledHeading className="tc pv3 white bg-purple mh6-l">
          My Projects
        </StyledHeading>
        <ProjectContainer className="">
          <div className="bg-purple">
            <StyledHeading className="white pt3">Rafits</StyledHeading>
            <ProjectImage src="img/rafits.png" />
            <ProjectPDiv>
              <ProjectP className="f4 white ph3 pb3">
                This project is a e-commerce store implementing a full CRUD API.
                It uses React, Apollo, GraphQL and Prisma.
              </ProjectP>
            </ProjectPDiv>
          </div>
          <div className="bg-purple">
            <StyledHeading className="white pt3">
              Face-Recognition-App
            </StyledHeading>
            <ProjectImage src="img/face.png" />
            <ProjectPDiv>
              <ProjectP className="f4 white ph3 pb3">
                This project is a face-recognition-app that utilizes the
                Clarifai API. It uses React, Node.js, and Express.
              </ProjectP>
            </ProjectPDiv>
          </div>
          <div className="bg-purple">
            <StyledHeading className="white pt3">Roboamigos</StyledHeading>
            <ProjectImage src="img/robo.png" />
            <ProjectPDiv>
              <ProjectP className="f4 white ph3 pb3">
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
