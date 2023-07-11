import { ThemeMode } from "@/types/ThemeMode";
import { AlertColor } from "@mui/material";

export type CustomAlert = {
  open?: boolean;
  type: AlertColor;
  message: string;
  duration?: number;
};

export type BestOfHAStore = {
  // state
  alert: CustomAlert;
  theme: ThemeMode;
  // functions
  setAlert: (_alert: CustomAlert) => void;
  setTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;
  purge: () => void;
};
