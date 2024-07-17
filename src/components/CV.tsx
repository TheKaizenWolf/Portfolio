"use client";
import React from "react";
import { Container, SFlex } from "./base/styles/Layout";
import styled from "styled-components";
import { SButton } from "./base/styles/Button";
import { SButtonText } from "./base/styles/Typography";

const SCVSection = styled(Container)`
  margin-bottom: 150px;
  @media (max-width: 1024px) {
    margin-bottom: 50px;
  }
  > div {
    justify-content: center;
  }
`;

function CV() {
  return (
    <SCVSection size="medium">
      <SFlex>
        <SButton as="a" target="_blank" href="/cv.pdf" download>
          <SButtonText>Download CV</SButtonText>
        </SButton>
      </SFlex>
    </SCVSection>
  );
}

export default CV;
