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
  showBadges: boolean;
  // functions
  setAlert: (_alert: CustomAlert) => void;
  setTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;
  setShowBadges: React.Dispatch<React.SetStateAction<boolean>>;
  purge: () => void;
};
