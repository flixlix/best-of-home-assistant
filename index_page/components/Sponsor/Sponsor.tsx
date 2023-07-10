import PageContainer from "@/layout/PageContainer";
import { VolunteerActivismOutlined } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function Sponsor() {
  return (
    <PageContainer>
      <Stack gap={2}>
        <Typography
          sx={{
            fontWeight: "light",
            width: "30ch",
            color: "text.secondary",
          }}
        >
          If you like this project, please consider supporting it by buying me a coffee, so I can continue to work on it
          and add more features :&#41;
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href="https://ko-fi.com/flixlix"
          target="_blank"
          sx={{
            bgcolor: "#DB0477",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              bgcolor: "#B40462",
            },
            width: "fit-content",
            gap: 1,
          }}
          size="large"
        >
          <VolunteerActivismOutlined fontSize={"medium"} />
          Buy me a coffee
        </Button>
      </Stack>
    </PageContainer>
  );
}
