import { AlertColor } from "@mui/material";

export type CustomAlert = {
  open?: boolean;
  type: AlertColor;
  message: string;
  duration?: number;
};

export type Theme = "light" | "dark";

export type BestOfHAStore = {
  // state
  alert: CustomAlert;
  theme: Theme;
  // functions
  setAlert: (alert: CustomAlert) => void;
  setTheme: (theme: Theme) => void;
  purge: () => void;
};
