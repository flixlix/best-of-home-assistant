import { useMyStore } from "@/store/store";
import { theme } from "@/styles/theme";
import { Launch } from "@mui/icons-material";
import { Box, Button, Link, Stack, Typography } from "@mui/material";
import React from "react";

interface FeaturedDescriptionProps {
  item: {
    title: string;
    repo: string;
    author: {
      name: string;
      profile: string;
    };
    imgPath?: string;
    videoPath?: string;
    description: React.ReactNode;
  };
}

export default function FeaturedDescription({ item }: FeaturedDescriptionProps) {
  const { theme: themeMode } = useMyStore();
  return (
    <Stack gap={2} justifyContent={"space-between"}>
      <Stack gap={2}>
        <Stack direction={"row"} gap={1} alignItems={"baseline"}>
          <Typography
            variant={"h4"}
            component={"h3"}
            sx={{
              color: "text.primary",
              fontWeight: "bold",
              maxWidth: "20ch",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {item.title}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "400", color: "text.secondary" }}>
            by{" "}
            <Link
              sx={{
                color: "inherit",
                textDecoration: "none",
                /* underline on hover */
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              href={item.author.profile}
              target="_blank"
            >
              {item.author.name}
            </Link>
          </Typography>
        </Stack>
        <Box
          sx={{
            color: "text.primary",
          }}
        >
          {item.description}
        </Box>
      </Stack>
      <Button
        variant={"contained"}
        size="large"
        sx={{
          width: "20ch",
          backgroundColor: themeMode === "light" ? "#fff" : "#171717",
          color: theme.palette.primary.main,
          gap: "0.5rem",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            width: "30ch",
            backgroundColor: themeMode === "light" ? "#fff" : "#171717",
          },
        }}
        href={item.repo}
        target="_blank"
      >
        Visit Project <Launch fontSize="small" />
      </Button>
    </Stack>
  );
}
