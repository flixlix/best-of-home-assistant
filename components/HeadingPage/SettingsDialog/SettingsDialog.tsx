import { useMyStore } from "@/store/store";
import { Close, SettingsOutlined } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Switch,
} from "@mui/material";
import React, { useEffect } from "react";

export default function SettingsDialog() {
  const { theme: currTheme, showBadges, setShowBadges } = useMyStore();
  const [isSettingsDialogOpen, setIsSettingsDialogOpen] = React.useState(false);

  return (
    <>
      <IconButton
        aria-label="open settings"
        onClick={() => setIsSettingsDialogOpen(true)}
        sx={
          currTheme === "dark"
            ? {
                color: "text.disabled",
              }
            : {}
        }
      >
        <SettingsOutlined />
      </IconButton>
      <Dialog open={isSettingsDialogOpen} onClose={() => setIsSettingsDialogOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Settings
          <DialogActions>
            <IconButton
              aria-label="close settings"
              onClick={() => setIsSettingsDialogOpen(false)}
              sx={
                currTheme === "dark"
                  ? {
                      color: "text.disabled",
                    }
                  : {}
              }
            >
              <Close />
            </IconButton>
          </DialogActions>
        </DialogTitle>
        <DialogContent>
          <FormControlLabel
            sx={{
              marginRight: 0,
            }}
            control={<Switch checked={showBadges} onChange={() => setShowBadges(!showBadges)} />}
            label="Show Badges"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
