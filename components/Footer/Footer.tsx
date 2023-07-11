import PageContainer from "@/layout/PageContainer";
import { GitHub } from "@mui/icons-material";
import { IconButton, Link, Stack, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <PageContainer>
        <Stack direction="row" alignItems="center" justifyContent={"space-between"} marginY={4}>
          <Link
            href="https://github.com/flixlix"
            target="_blank"
            textTransform={"none"}
            sx={{
              textDecoration: "none",
            }}
          >
            <Typography variant="body2" color={"text.disabled"}>
              © {new Date().getFullYear()} flixlix
            </Typography>
          </Link>
          <Stack direction={"row"} spacing={1} alignItems={"center"}>
            <Typography variant="body2" color={"text.disabled"}>
              View Source Code in GitHub
            </Typography>
            <IconButton
              disableRipple
              aria-label="View Source Code in GitHub"
              href="https://github.com/flixlix/best-of-home-assistant"
              target="_blank"
              sx={{
                color: "text.disabled",
                fill: "text.disabled",
                opacity: 0.3,
                transition: "opacity 0.2s ease-in-out",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <GitHub />
            </IconButton>
          </Stack>
        </Stack>
      </PageContainer>
    </footer>
  );
}
