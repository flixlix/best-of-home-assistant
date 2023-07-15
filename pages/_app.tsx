import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import getTheme from "@/styles/theme";
import { Alert, Box, Snackbar } from "@mui/material";
import { useMyStore } from "@/store/store";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  const { alert, setAlert, theme: themeMode } = useMyStore();
  const theme = getTheme(themeMode);

  const calledOnce = React.useRef(false);

  const router = useRouter();

  const pageName = router.pathname.replace("/", "");

  const incrementPageView = async () => {
    try {
      const response = await fetch("/api/increment", {
        method: "POST",
        body: JSON.stringify({ page_name: pageName === "" ? "home" : pageName }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error("Failed to increment page view");
      }
    } catch (error) {
      console.error("An error occurred while incrementing page view:", error);
    }
  };

  useEffect(() => {
    if (calledOnce.current) {
      return;
    }
    incrementPageView();
    calledOnce.current = true;
  }, []);

  return (
    <>
      <Head>
        <DefaultSeo
          title="Best of Home Assistant"
          description="A curated list of the best Home Assistant custom components, plugins, addons, custom cards, and themes."
        />
        <title>Best of Home Assistant</title>
        <meta name="description" content="This is a website to showcase the best of Home Assistant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <Analytics />
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            boxSizing: "border-box",
            backgroundColor: theme.palette.background.default,
            "& *": {
              fontFamily: "Roboto, sans-serif",
            },
          }}
        >
          <Component {...pageProps} />
          <Snackbar
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            open={alert.open}
            autoHideDuration={alert.duration}
            onClose={() => setAlert({ ...alert, open: false })}
          >
            <Alert severity={alert.type} onClose={() => setAlert({ ...alert, open: false })}>
              {alert.message}
            </Alert>
          </Snackbar>
        </Box>
      </ThemeProvider>
    </>
  );
}
