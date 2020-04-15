import React from 'react';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { FaLinkedinIn } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go';
import Image from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const StyledHeroContainer = styled.div.attrs({
  className: 'relative flex flex-row justify-center items-center text-center',
})`
  height: 67vh;
  overflow: hidden;

  .heading {
    ${tw`text-5xl font-bold px-2 text-white mb-4`}
    font-family: 'Proxima Nova Black';
  }
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

const Hero = () => {
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
    <StyledHeroContainer>
      <div className="left-section animated bounceInLeft">
        <div className="flex justify-center">
          <h1 className="heading">I Am A Frontend Engineer</h1>
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
  );
};

export default Hero;
