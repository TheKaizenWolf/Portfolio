import type { AppProps } from 'next/app';

import Head from 'next/head';
import { getCssText, globalCss } from '../stitches';

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
    backgroundColor: '$grayDarkest',
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
