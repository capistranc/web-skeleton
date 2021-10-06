import React, { useState, useEffect, useRef } from "react";

import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import { Global, css } from "@emotion/react";
import customTheme, { theme } from "../theme";
import { AnimatePresence } from "framer-motion";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

// import "@fontsource/raleway/";
// import "@fontsource/oswald/";
// import "@fontsource/roboto/";
// import "@fontsource/roboto-condensed";

// eslint-disable-next-line
declare const window: any;

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric): void {
  window.gtag("event", name, {
    event_category:
      label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true, // avoids affecting bounce rate.
  });
}
const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            scroll-behavior: smooth;
            height: 100%;
            width: 100%;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
          }
          #__next {
            height: 100%;
            width: 100%;
            overflow: hidden;

            background: ${theme.bg[colorMode]};
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps, router }: AppProps) => {
  const url = `https://westendwebdesigns.com${router.route}`;
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <DefaultSeo
        titleTemplate="%s - Web Skeleton"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url,
          description:
            "The business website for Web Skeleton, a Next-JS boilerplate",
          site_name: "Web Skeleton | web-skeleton.dev",
          images: [],
        }}
        canonical={url}
      />
      <ChakraProvider resetCSS theme={customTheme}>
        <ColorModeProvider
          options={{ initialColorMode: "light", useSystemColorMode: false }}
        >
          <GlobalStyle>
            <Header />

            <AnimatePresence
              exitBeforeEnter
              initial={false}
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <Component {...pageProps} canonical={url} key={url} />
            </AnimatePresence>
            <Footer />
          </GlobalStyle>
        </ColorModeProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
