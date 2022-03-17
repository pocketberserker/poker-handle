import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import "sanitize.css";

import { appName } from "../src/client/constants/meta";
import { MessageSnackbarProvider } from "../src/client/hooks/MessageSnackbar";
import { ThemeProvider } from "../src/client/providers/ThemeProvider";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>{appName}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider>
        <MessageSnackbarProvider>
          <Component {...pageProps} />
        </MessageSnackbarProvider>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
