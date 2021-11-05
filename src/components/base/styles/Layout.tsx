import { styled } from '../../../stitches';

export const Container = styled('div', {
  margin: '0 auto',
  padding: '0px 20px',
  defaultVariants: {
    size: 'large',
  },
  variants: {
    size: {
      small: {
        maxWidth: '$small',
      },
      medium: {
        maxWidth: '$medium',
      },
      large: {
        maxWidth: '$large',
      },
      extraLarge: {
        maxWidth: '$extralarge',
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
