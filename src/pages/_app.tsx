import type { AppProps } from 'next/app';

import Head from 'next/head';
import { globalCss } from '../stitches';

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: '0',
    margin: '0',
  },
  html: {
    fontFamily: '"Open Sans", sans-serif',
  },
  'html, body': {
    backgroundColor: '$grayDark',
    color: '$grayLight',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
