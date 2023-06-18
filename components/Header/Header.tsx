import PageContainer from "@/layout/PageContainer";
import theme, { headerHeight } from "@/styles/theme";

import { Box, Button, Paper, Stack, Typography, useScrollTrigger } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CompactHeader from "./CompactHeader";

// add drop-shadow to header when scrolling

interface ElevationScrollProps {
  window?: () => Window;
  children: React.ReactElement;
  isWideEnough?: boolean;
}

function ElevationScroll(props: ElevationScrollProps) {
  const { children, window, isWideEnough } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 30,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    variant: trigger ? "elevation" : "outlined",
    elevation: trigger ? 3 : 0,
    sx: {
      padding: trigger || !isWideEnough ? 1 : 2,
      zIndex: 104,
      top: 0,
      width: "100%",
      boxSizing: "border-box",
      position: "sticky",
      transition: "padding 0.2s ease-in-out",
    },
  });
}

interface HeaderProps {
  window?: () => Window;
  children?: React.ReactElement;
  acitveMainLink?: boolean;
  isInIndex?: boolean;
}

type HeaderLink = {
  href: string;
  title: string;
};

export interface HeaderContentProps {
  acitveLinkIndex?: number;
  title?: string;
  navigationLinks?: HeaderLink[];
  headerRef?: React.RefObject<HTMLDivElement>;
}

export default function Header(props: HeaderProps) {
  const router = useRouter();
  const isWideEnough = useMediaQuery("(min-width:600px)");
  const title = "Best of Home Assistant";
  const [currentLinkIndex, setCurrentLinkIndex] = React.useState(-1);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const links: HeaderLink[] = [
    {
      href: "/",
      title: "Integrations",
    },
    {
      href: "/",
      title: "Cards",
    },
    {
      href: "/",
      title: "Scripts",
    },
    {
      href: "/",
      title: "Themes",
    },
  ];

  return (
    <ElevationScroll window={props.window} isWideEnough={isWideEnough}>
      <Paper ref={headerRef}>
        {!isWideEnough ? (
          <CompactHeader
            title={title}
            acitveLinkIndex={currentLinkIndex}
            navigationLinks={links}
            headerRef={headerRef}
          />
        ) : (
          <DesktopHeader title={title} acitveLinkIndex={currentLinkIndex} navigationLinks={links} />
        )}
      </Paper>
    </ElevationScroll>
  );
}

function DesktopHeader({ title, acitveLinkIndex, navigationLinks }: HeaderContentProps) {
  return (
    <PageContainer
      style={{
        height: "100%",
      }}
    >
      <Stack direction="row" spacing={2} alignItems={"center"} justifyContent={"space-between"} height={"100%"}>
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
              width={40}
              height={40}
              style={{
                borderRadius: "5px",
              }}
            />
            <Typography variant="h5" component="h1">
              {title}
            </Typography>
          </Stack>
        </Link>
        <Stack direction="row" spacing={2}>
          {navigationLinks?.map((link, index) => (
            <Button
              key={link.title}
              sx={{
                boxShadow: acitveLinkIndex === index ? "0 0 10px rgba(0, 0, 0, 0.2)" : "none",
              }}
            >
              {link.title}
            </Button>
          ))}
        </Stack>
      </Stack>
    </PageContainer>
  );
}
