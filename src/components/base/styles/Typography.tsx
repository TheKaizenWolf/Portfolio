import { styled } from '../../../stitches';

export const SHeadingPrimary = styled('h1', {
  fontSize: '$5xl',
  fontWeight: '700',
  lineHeight: '1.2',
});
export const SHeadingTertiary = styled('h3', {
  fontSize: '$3xl',
  fontWeight: '700',
});
export const SParagraph = styled('p', {
  fontSize: '$lg',
  fontWeight: '400',
  lineHeight: '1.8',
  strong: {
    color: '$redMedium',
  },
});
export const SLink = styled('a', {
  fontSize: '$md',
  borderBottom: '2px solid transparent',
  paddingBottom: '5px',
  letterSpacing: '0.05em',
  transition: 'all 0.4s ease',
  '&:hover': {
    borderBottom: '2px solid $redMedium',
  },
  variants: {
    active: {
      true: {
        borderBottom: '2px solid $redMedium',
      },
    },
  },
});
export const SLogo = styled('a', {
  fontSize: '$2xl',
  fontWeight: '700',
});
