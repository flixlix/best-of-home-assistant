import {
  Brightness1,
  Brightness7Outlined,
  DarkMode,
  DarkModeOutlined,
  LightMode,
  LightModeOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

export default function ThemeSwitcher() {
  const [colorMode, setColorMode] = React.useState<"light" | "dark">("light");
  const toggleColorMode = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };
  return (
    <IconButton aria-label="Toggle dark mode" onClick={toggleColorMode} color="primary">
      {colorMode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
    </IconButton>
  );
}
