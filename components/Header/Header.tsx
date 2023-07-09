import PageContainer from "@/layout/PageContainer";
import { Button, IconButton, PaletteMode, Paper, Stack, SvgIcon, Typography, useScrollTrigger } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import Logo from "./HALogo";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CompactHeader from "./CompactHeader";

import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import HALogo from "./HALogo";

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
  isInIndex?: number;
  currentLinkIndex?: number;
  toggleTheme: () => void;
  currTheme: PaletteMode;
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
  toggleTheme: () => void;
  currTheme?: PaletteMode;
}

interface ThemeSwitcherProps {
  toggleTheme: () => void;
  currTheme?: PaletteMode;
}

function ThemeSwitcher({ toggleTheme, currTheme }: ThemeSwitcherProps) {
  return (
    <IconButton aria-label="Toggle dark mode" onClick={() => toggleTheme()} color="primary">
      {currTheme === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
    </IconButton>
  );
}

export default function Header(props: HeaderProps) {
  const { currTheme, toggleTheme, currentLinkIndex } = props;
  // const router = useRouter();
  const isWideEnough = useMediaQuery("(min-width:600px)", {
    defaultMatches: true,
  });
  const title = "Best of Home Assistant";
  // const [currentLinkIndex, setCurrentLinkIndex] = React.useState(-1);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const links: HeaderLink[] = [
    {
      href: "/integrations",
      title: "Integrations",
    },
    {
      href: "/cards",
      title: "Cards",
    },
    {
      href: "/scripts",
      title: "Scripts",
    },
    {
      href: "/themes",
      title: "Themes",
    },
  ];
  return (
    <ElevationScroll window={props.window} isWideEnough={isWideEnough}>
      <Paper ref={headerRef}>
        {isWideEnough === false ? (
          <CompactHeader
            title={title}
            toggleTheme={() => toggleTheme()}
            acitveLinkIndex={currentLinkIndex}
            navigationLinks={links}
            headerRef={headerRef}
          />
        ) : (
          <DesktopHeader
            title={title}
            acitveLinkIndex={currentLinkIndex}
            navigationLinks={links}
            currTheme={currTheme}
            toggleTheme={toggleTheme}
          />
        )}
      </Paper>
    </ElevationScroll>
  );
}

function DesktopHeader({ title, acitveLinkIndex, navigationLinks, currTheme, toggleTheme }: HeaderContentProps) {
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
            <HALogo />
            <Typography variant="h5" component="h1">
              {title}
            </Typography>
          </Stack>
        </Link>
        <Stack direction="row" spacing={2}>
          {navigationLinks?.map((link, index) => (
            <Button
              key={link.title}
              href={link.href}
              sx={{
                boxShadow:
                  acitveLinkIndex !== undefined && acitveLinkIndex === index ? "0 0 10px rgba(0, 0, 0, 0.2)" : "none",
              }}
            >
              {link.title}
            </Button>
          ))}
          <ThemeSwitcher currTheme={currTheme} toggleTheme={toggleTheme} />
        </Stack>
      </Stack>
    </PageContainer>
  );
}
