import { createStitches } from '@stitches/react';

export const { styled, css, keyframes, globalCss } = createStitches({
  theme: {
    colors: {
      redMedium: 'hsl(338, 100%, 60%)',
      redDark: 'hsl(338, 100%, 44%)',
      grayLight: 'hsl(226, 70%, 90%)',
      grayMedium: 'hsl(225, 20%, 70%)',
      grayDarker: 'hsl(218, 38%, 15%)',
      grayDarkest: 'hsl(216, 65%, 9%)',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    sizes: {
      small: '640px',
      medium: '1020px',
      large: '1200px',
      extraLarge: '1440px',
    },
  },
  media: {
    bpLg: '(max-width: 1024px)',
  },
});
