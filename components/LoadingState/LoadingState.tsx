import PageContainer from "@/layout/PageContainer";
import { useMyStore } from "@/store/store";
import { LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";

export default function LoadingState() {
  const { theme } = useMyStore();
  return (
    <PageContainer>
      <Stack gap={2} height={"79vh"} boxSizing={"border-box"}>
        <Typography variant="h5" component={"h1"} textAlign={"center"} color={theme === "light" ? "GrayText" : "gray"}>
          Loading...
        </Typography>
        <LinearProgress />
      </Stack>
    </PageContainer>
  );
}
