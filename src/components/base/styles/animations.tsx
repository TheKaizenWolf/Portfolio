import { keyframes } from "styled-components";

export const typing = keyframes`
  from { width: 0; }
  to { width: 110%; }
`;

export const blinkCaret = keyframes`
  from, to { border-color: transparent; }
  50% { border-color: hsl(338, 100%, 60%) }
`;
