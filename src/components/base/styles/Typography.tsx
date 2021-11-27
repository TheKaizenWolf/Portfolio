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
export const SButtonText = styled('span', {
  fontSize: '$lg',
  fontWeight: '700',
  lineHeight: '1.8',
  letterSpacing: '0.05em',
  color: 'white',
});
export const SParagraph = styled('p', {
  fontSize: '$lg',
  fontWeight: '400',
  lineHeight: '1.8',
  strong: {
    color: '$redMedium',
  },
});
export const SText = styled('span', {
  fontSize: '$md',
  fontWeight: '400',
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
  display: 'flex',
  gap: '15px',
  alignItems: 'center',
  fontSize: '$2xl',
  fontWeight: '700',
  lineHeight: '1',
  img: {
    width: '40px',
    borderRadius: '10px',
  },
});
