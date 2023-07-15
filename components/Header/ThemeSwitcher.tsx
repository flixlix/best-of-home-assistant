import { useMyStore } from "@/store/store";
import { ThemeMode } from "@/types/ThemeMode";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

export default function ThemeSwitcher() {
  const { theme: currTheme, setTheme } = useMyStore();

  const toggleTheme = React.useCallback(() => {
    if (currTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, [currTheme, setTheme]);

  return (
    <IconButton aria-label="Toggle dark mode" onClick={() => toggleTheme && toggleTheme()} color="primary">
      {currTheme === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
    </IconButton>
  );
}
