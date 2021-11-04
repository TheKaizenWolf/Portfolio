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
        maxWidth: '960px',
      },
      large: {
        maxWidth: '1280px',
      },
      extraLarge: {
        maxWidth: '1440px',
      },
    },
  },
});
