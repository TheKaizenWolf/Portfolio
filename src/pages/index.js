import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const StyledHeroContainer = styled.div.attrs({
  className: '',
})`
  height: 70vh;
  overflow: hidden;
`;
const StyledRow = styled.div.attrs({
  className: 'bg-purple',
})`
  height: 30vh;
`;
const StyledHeading = styled.h1.attrs({
  className: 'f1 fw8 w-40',
})`
  font-family: 'Proxima Nova Black';
`;

const HeroImageContainer = styled(Link).attrs({})`
  width: 500px;
  margin: 0 auto;
  left: 650px;

  @media (max-width: 60rem) {
    display: none;
  }
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
      <StyledHeroContainer className="relative flex flex-column justify-center tc">
        <StyledHeading className="w-40-l animated bounceInLeft w-100 ph2">
          I Am A Full-Stack Developer
        </StyledHeading>
        <div className="flex w-40-l justify-center animated bounceInLeft ">
          <FaLinkedinIn className="f2 pr3" />
          <GoMarkGithub className="f2" />
        </div>
        <HeroImageContainer className="absolute animated bounceInRight ">
          <Image fluid={image.sharp.fluid} />
        </HeroImageContainer>
      </StyledHeroContainer>
      <StyledRow />
    </Layout>
  );
};

export default Index;
