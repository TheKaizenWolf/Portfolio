import styled from "styled-components";

interface ContainerProps {
  size?: "small" | "medium" | "large" | "extraLarge";
}
export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  padding: 0px 20px;
  max-width: ${({ size }) => {
    switch (size) {
      case "small":
        return "640px";
      case "medium":
        return "1020px";
      case "large":
        return "1200px";
      case "extraLarge":
        return "1440px";
      default:
        return "1200px";
    }
  }};
  @media (max-width: 640px) {
    max-width: 640px;
  }
`;

export const SBox = styled.div`
  position: relative;
`;

export const SFlex = styled.div`
  display: flex;
`;

export const SGrid = styled.div`
  display: grid;
`;
