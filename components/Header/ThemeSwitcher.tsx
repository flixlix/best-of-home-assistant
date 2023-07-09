import { useMyStore } from "@/store/store";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

export default function ThemeSwitcher() {
  const { setTheme: setThemeMode, theme: themeMode } = useMyStore();
  const toggleColorMode = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };
  return (
    <IconButton aria-label="Toggle dark mode" onClick={() => toggleColorMode()} color="primary">
      {themeMode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
    </IconButton>
  );
}
