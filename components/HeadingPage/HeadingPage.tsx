import { theme } from "@/styles/theme";
import { FormControlLabel, Stack, Switch, Typography } from "@mui/material";
import React from "react";
import SettingsDialog from "./SettingsDialog/SettingsDialog";

interface HeadingPageProps {
  count: number;
  title: string;
  subtitle: string;
}

export default function HeadingPage({ count, title, subtitle }: HeadingPageProps) {
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
      <Stack marginY={2}>
        <Stack direction={"row"} alignItems={"baseline"} gap={2}>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              color: "text.primary",
            }}
          >
            {title}
          </Typography>
          <Typography color={"text.secondary"} variant={"subtitle1"}>
            {count + "\u00A0" + title.toLowerCase()}
          </Typography>
        </Stack>
        <Typography color={"text.secondary"} variant={"subtitle1"}>
          {subtitle}
        </Typography>
      </Stack>
      <SettingsDialog />
    </Stack>
  );
}
