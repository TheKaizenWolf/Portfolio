import React from 'react';
import styled from 'styled-components';

const ImageBackground = styled.div.attrs({
  className: 'cover',
})`
  background-image: url('images/hero.jpg');
  background-position: top 30% center;
  height: 35vh;
`;
const Hero = () => <ImageBackground />;

export default Hero;
