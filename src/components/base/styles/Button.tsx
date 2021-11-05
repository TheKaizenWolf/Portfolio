import { styled } from '@stitches/react';

export const SButton = styled('button', {
  display: 'flex',
  gap: '10px',
  background: '$redDark',
  border: 0,
  borderRadius: '15px',
  padding: '10px 15px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    background: '$redMedium',
    cursor: 'pointer',
  },
});
