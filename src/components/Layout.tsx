import React, { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { styled } from '../stitches';
import { Container } from './base/styles/Layout';
import { SLink, SLogo, SParagraph } from './base/styles/Typography';

const SHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 0px',
  '@bpMd': {
    flexDirection: 'column',
    gap: '20px',
  },
});
const SHeaderLinks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '40px',
});
const SFooter = styled('footer', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 0px',
  background: '$grayDarker',
  '> div': {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 20px',
    margin: '0 auto',
    maxWidth: '$medium',
    width: '100%',
    gap: '10px',
    '@bpMd': {
      flexDirection: 'column',
      gap: '20px',
    },
  },
  '@bpMd': {
    flexDirection: 'column',
    gap: '20px',
  },
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
          <SLogo>
            <img src="/logo2.png" alt="Raul Saavedra" />
            Raul Saavedra
          </SLogo>
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
