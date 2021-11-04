import { keyframes } from '../../../stitches';

export const typing = keyframes({
  from: { width: '0' },
  to: { width: '110%' },
});

export const blinkCaret = keyframes({
  'from, to': { borderColor: 'transparent' },
  '50%': { borderColor: '$redMedium' },
});
