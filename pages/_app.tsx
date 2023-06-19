import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import getTheme from "@/styles/theme";
import { Box, useMediaQuery } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const slug = router.pathname;
  const initialized = useRef(false);
  const [formattedSlug, setFormattedSlug] = useState<string>("");
  useEffect(() => {
    async function updateViewCount(slug: string) {
      const res = await fetch(`/api/views/${slug}`, {
        method: "POST",
      });
      return res;
    }
    if (!initialized.current && !!slug) {
      const newSlug = slug === "/" ? "home" : slug;
      initialized.current = true;
      updateViewCount(newSlug);
      setFormattedSlug(newSlug);
    }
  }, [slug]);

  const fetcher = async (input: RequestInfo) => {
    const res: Response = await fetch(input);
    return await res.json();
  };

  const { data } = useSWR(`/api/views/${slug === "/" ? "home" : slug}`, fetcher);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  /* create theme mode context */
  console.log(prefersDarkMode);
  const [themeMode, setThemeMode] = useState<"light" | "dark">(prefersDarkMode ? "dark" : "light");
  useEffect(() => {
    if (prefersDarkMode) {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  }, [prefersDarkMode]);
  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const theme = getTheme(themeMode);

  return (
    <>
      <Head>
        <title>Best of Home Assistant</title>
        <meta name="description" content="This is a website to showcase the best of Home Assistant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            boxSizing: "border-box",
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Component {...pageProps} toggleTheme={toggleTheme} currTheme={themeMode} />
        </Box>
      </ThemeProvider>
    </>
  );
}
