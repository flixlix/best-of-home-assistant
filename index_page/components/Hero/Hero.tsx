import PageContainer from "@/layout/PageContainer";
import { theme } from "@/styles/theme";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Featured from "./Featured";

export default function Hero() {
  return (
    <PageContainer>
      <Stack gap={2}>
        <Stack>
          <Typography
            variant="h1"
            sx={{ color: "text.primary", fontWeight: "bold", fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Welcome to{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              Open Source Projects
            </Box>
          </Typography>
          <Typography
            variant="h2"
            component={"p"}
            sx={{ color: "text.secondary", fontWeight: "100", fontSize: "clamp(1rem, 32vw, 1.5rem)" }}
          >
            A curated list of awesome open source projects related to Home Assistant.
          </Typography>
        </Stack>
      </Stack>
    </PageContainer>
  );
}
