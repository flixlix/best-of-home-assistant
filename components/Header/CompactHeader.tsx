import React, { useState } from "react";
import { HeaderContentProps } from "./Header";
import PageContainer from "@/layout/PageContainer";
import { Button, Drawer, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

import { Close } from "@mui/icons-material";
import { theme } from "@/styles/theme";
import { useRouter } from "next/router";

export default function CompactHeader({ title, navigationLinks, headerRef }: HeaderContentProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = () => {
    setAnchorEl(headerRef?.current || null);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  return (
    <>
      <PageContainer
        style={{
          height: "100%",
        }}
      >
        <Stack
          ref={headerRef}
          direction="row"
          spacing={2}
          alignItems={"center"}
          justifyContent={"space-between"}
          height={"100%"}
        >
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
              <Image
                src="/ha_logo.svg"
                alt={title || "Best of Home Assistant"}
                width={20}
                height={20}
                style={{
                  borderRadius: "5px",
                }}
              />
              <Typography
                variant="body1"
                component="h1"
                sx={{
                  textWrap: "nowrap",
                }}
              >
                {title}
              </Typography>
            </Stack>
          </Link>
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "nav-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuOutlinedIcon />
          </IconButton>
        </Stack>
      </PageContainer>
      <Drawer
        id="nav-menu"
        anchor={"top"}
        open={open}
        onClose={handleClose}
        sx={{
          borderRadius: theme.shape.borderRadius,
          "& .MuiMenu-list": {
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Stack>
          <Stack flexDirection={"row"} justifyContent={"end"}>
            <IconButton
              onClick={handleClose}
              sx={{
                margin: "1rem",
                marginBottom: "0",
              }}
              size="large"
            >
              <Close fontSize="inherit" />
            </IconButton>
          </Stack>

          {navigationLinks?.map((link) => (
            <MenuItem
              key={link.title}
              onClick={() => {
                handleClose();
                router.push(link.href);
              }}
              sx={{
                height: "5rem",
              }}
            >
              {link.title}
            </MenuItem>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
