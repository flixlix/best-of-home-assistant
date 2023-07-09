import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { useEffect, useState } from "react";
import getTheme from "@/styles/theme";
import { Alert, Box, Snackbar, useMediaQuery } from "@mui/material";
import { useMyStore } from "@/store/store";

export default function App({ Component, pageProps }: AppProps) {
  const { alert, setAlert, setTheme: setThemeMode, theme: themeMode } = useMyStore();
  // const router = useRouter();
  // const slug = router.pathname;
  // const initialized = useRef(false);
  // const [formattedSlug, setFormattedSlug] = useState<string>("");
  // useEffect(() => {
  //   async function updateViewCount(slug: string) {
  //     const res = await fetch(`/api/views/${slug}`, {
  //       method: "POST",
  //     });
  //     return res;
  //   }
  //   if (!initialized.current && !!slug) {
  //     const newSlug = slug === "/" ? "home" : slug;
  //     initialized.current = true;
  //     updateViewCount(newSlug);
  //     setFormattedSlug(newSlug);
  //   }
  // }, [slug]);

  // const fetcher = async (input: RequestInfo) => {
  //   const res: Response = await fetch(input);
  //   return await res.json();
  // };

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    if (prefersDarkMode) {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  }, [prefersDarkMode]);

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  const theme = getTheme(themeMode);

  return (
    <>
      <Head>
        <title>Best of Home Assistant</title>
        <meta name="description" content="This is a website to showcase the best of Home Assistant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            boxSizing: "border-box",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Component {...pageProps} toggleTheme={toggleTheme} currTheme={themeMode} />
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
