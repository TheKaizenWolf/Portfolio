import React from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import useInstagram from '../hooks/use-instagram';

const ImageContainer = styled.a.attrs({
  className: 'dib ma3 grow shadow-3',
})`
  width: 200px;
`;
const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];
  return (
    <div className="tc-m">
      <h2>Instagram posts from @{username}</h2>
      <div className="tc">
        {instaPhotos.map(photo => (
          <ImageContainer href={`https://instagram.com/p/${photo.id}/`}>
            <Image fluid={photo.fluid} alt={photo.caption} />
          </ImageContainer>
        ))}
      </div>
      <a className="f4 fw8 link dim" href="https://instagram.com/thekaizenwolf">
        See more in instagram
      </a>
    </div>
  );
};

export default Insta;
