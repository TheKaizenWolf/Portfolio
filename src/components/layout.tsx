"use client";
import React from "react";
import { Container } from "./base/styles/Layout";
import { SLink, SLogo, SParagraph } from "./base/styles/Typography";
import { usePathname } from "next/navigation";
import styled, { createGlobalStyle } from "styled-components";

const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const SHeaderLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const SFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  background: var(--colors-gray-darker);
  > div {
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    margin: 0 auto;
    max-width: 1020px;
    width: 100%;
    gap: 10px;
    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 20px;
    }
  }
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    font-family: 'Open Sans', sans-serif;
  }
  html, body {
    background-color: hsl(216, 65%, 9%);
    color: hsl(226, 70%, 90%);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  html {
    --colors-red-medium: hsl(338, 100%, 60%);
    --colors-red-dark: hsl(338, 100%, 44%);
    --colors-red-darker: hsl(338, 100%, 38%);
    --colors-gray-light: hsl(226, 70%, 90%);
    --colors-gray-medium: hsl(225, 20%, 70%);
    --colors-gray-darker: hsl(218, 38%, 15%);
    --colors-gray-darkest: hsl(216, 65%, 9%);
  }

`;
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const links = [
    {
      name: "Home",
      path: "/",
    },
  ];
  return (
    <div>
      <GlobalStyle />
      <Container>
        <SHeader>
          <SLogo>
            <img src="/logo.png" alt="Raul Saavedra" />
            Raul Saavedra
          </SLogo>
          <SHeaderLinks>
            {links.map((link) => (
              <SLink
                href={link.path}
                active={pathname === link.path}
                key={link.name}
              >
                {link.name}
              </SLink>
            ))}
          </SHeaderLinks>
        </SHeader>
      </Container>
      {children}
      <SFooter>
        <div>
          <SParagraph>
            <strong>Raul Saavedra</strong> © {new Date().getFullYear()}
          </SParagraph>
          <SParagraph>
            <strong>Email:</strong> raul670saavedra@gmail.com
          </SParagraph>
        </div>
      </SFooter>
    </div>
  );
}
