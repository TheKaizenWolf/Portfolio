import styled from "styled-components";

export const SButton = styled.button`
  display: flex;
  gap: 10px;
  background: hsl(338, 100%, 44%);
  border: 0;
  border-radius: 15px;
  padding: 10px 15px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--colors-red-medium);
    cursor: pointer;
  }
`;
