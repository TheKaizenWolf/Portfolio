import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
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
          <meta name="title" content="Raul Saavedra" />
          <meta name="description" content="Portfolio of Raul Saavedra" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://rauls.vercel.app/" />
          <meta property="og:title" content="Raul Saavedra" />
          <meta
            property="og:description"
            content="Portfolio of Raul Saavedra"
          />
          <meta property="og:image" content="/public/screenshot.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://rauls.vercel.app/" />
          <meta property="twitter:title" content="Raul Saavedra" />
          <meta
            property="twitter:description"
            content="Portfolio of Raul Saavedra"
          />
          <meta property="twitter:image" content="/public/screenshot.png" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }} // eslint-disable-line react/no-danger
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
