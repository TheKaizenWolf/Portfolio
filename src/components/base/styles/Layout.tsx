import { styled } from '../../../stitches';

export const Container = styled('div', {
  maxWidth: '1280px',
  margin: '0 auto',
  padding: '0px 20px',
  variants: {
    size: {
      small: {
        maxWidth: '640px',
      },
      medium: {
        maxWidth: '1020px',
      },
      large: {
        maxWidth: '1200px',
      },
      extraLarge: {
        maxWidth: '1440px',
      },
    },
  },
});

export const SBox = styled('div', {
  position: 'relative',
});

export const SFlex = styled('div', {
  display: 'flex',
});

export const SGrid = styled('div', {
  display: 'grid',
});
