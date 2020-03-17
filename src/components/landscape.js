import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage).attrs({
  className: 'cover',
})`
  background-position: top 30% center;
  height: 35vh;
`;
const Landscape = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "landscape.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return <ImageBackground Tag="section" fluid={image.sharp.fluid} />;
};

export default Landscape;
