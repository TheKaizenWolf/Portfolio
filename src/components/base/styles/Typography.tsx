import styled from "styled-components";

export const SHeadingPrimary = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const SHeadingTertiary = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
`;

export const SButtonText = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.8;
  letter-spacing: 0.05em;
  color: white;
`;

export const SParagraph = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.8;
  strong {
    color: var(--colors-red-medium);
  }
`;

export const SText = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;

interface LinkProps {
  active?: boolean;
}

export const SLink = styled.a<LinkProps>`
  font-size: 1.125rem;
  border-bottom: 2px solid transparent;
  padding-bottom: 5px;
  letter-spacing: 0.05em;
  transition: all 0.4s ease;
  color: var(--colors-red-medium);
  font-weight: bold;
  &:hover {
    border-bottom: 2px solid var(--colors-red-medium);
  }
  ${(props) =>
    props.active &&
    `
    border-bottom: 2px solid var(--colors-red-medium);
  `}
`;

export const SLogo = styled.a`
  display: flex;
  gap: 15px;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  img {
    width: 40px;
    border-radius: 10px;
  }
`;
