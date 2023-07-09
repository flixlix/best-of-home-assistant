import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import { amber, blue, deepOrange, grey } from "@mui/material/colors";
import React from "react";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

const borderRadius = 12;
export const headerHeight = 64;

// Create a theme instance.

const getDesignTokens = (mode?: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "dark" && {
      background: {
        default: "#171717",
        paper: "#222222",
      },
      text: {
        primary: "#ffffff",
        secondary: "#f5f5f5",
        disabled: "#c0c0c0",
      },
    }),
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
          borderColor: mode === "dark" ? "#073D62" : "#D9EDFB",
          boxShadow: "none",
          transition: "box-shadow .4s",
          "&:hover": {
            borderColor: "#049cdb",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
  },
});

export const theme = createTheme({
  palette: {
    primary: {
      main: "#049cdb",
      "100": "#D9EDFB",
      "200": "#AEDCFB",
      "300": "#83C7F5",
      "400": "#56B6F6",
      "500": "#049CDB",
      "600": "#1772B0",
      "700": "#0A4D7A",
      "800": "#073D62",
      "900": "#011B2D",
    },
    secondary: {
      main: "#FFBC42",
    },
    grey: {
      "100": "#F7F7F7",
      "200": "#E5E5E5",
      "300": "#D4D4D4",
      "400": "#C4C4C4",
      "500": "#B3B3B3",
      "600": "#A2A2A2",
      "700": "#929292",
      "800": "#818181",
      "900": "#707070",
    },
    error: {
      main: "#F03A47",
    },
    warning: {
      main: "#F2A541",
    },
    background: {
      default: "#F7F7F7",
      paper: "#fff",
    },
  },
  shape: {
    borderRadius: borderRadius,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          /* set font to lower and uppercase */
          textTransform: "none",
          paddingBlock: "0.3rem",
          borderRadius: borderRadius,
          fontWeight: "bold",
          boxShadow: "none",
          transition: "box-shadow .4s",
          "&:hover": {
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
          borderColor: "#D9EDFB",
          boxShadow: "none",
          transition: "box-shadow .4s",
          "&:hover": {
            borderColor: "#049cdb",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: "10px",
          padding: 4,
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
          boxShadow: "none",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
          gap: 2,
          height: "56px",
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
          height: "56px",
          backgroundColor: "#ffffff",
        },
      },
    },
  },
});

function getTheme(mode?: PaletteMode) {
  return createTheme(theme, getDesignTokens(mode));
}

export default getTheme;
