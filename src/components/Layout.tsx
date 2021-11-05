import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { styled } from '../stitches';
import { Container } from './base/styles/Layout';
import { SLink, SLogo } from './base/styles/Typography';

const SHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 0px',
  '@bpLg': {
    flexDirection: 'column',
    gap: '20px',
  },
});
const SHeaderLinks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
});
export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const links = [
    {
      name: 'Home',
      path: '/',
    },
  ];

  return (
    <div>
      <Container>
        <SHeader>
          <SLogo>Raul Saavedra</SLogo>
          <SHeaderLinks>
            {links.map((link) => (
              <Link href={link.path} key={link.name} passHref>
                <SLink active={router.pathname === link.path}>
                  {link.name}
                </SLink>
              </Link>
            ))}
          </SHeaderLinks>
        </SHeader>
      </Container>
      {children}
    </div>
  );
}
