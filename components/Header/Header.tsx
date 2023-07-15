import PageContainer from "@/layout/PageContainer";
import { Button, IconButton, PaletteMode, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import CompactHeader from "./CompactHeader";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import HALogo from "./HALogo";
import { useMyStore } from "@/store/store";
import ElevationScroll from "./ElevationScroll";
import { ThemeMode } from "@/types/ThemeMode";
import DesktopHeader from "./DesktopHeader";
import { HeaderLink, links, title } from "./data";

export interface HeaderContentProps {
  acitveLinkIndex?: number;
  title?: string;
  navigationLinks?: HeaderLink[];
  headerRef?: React.RefObject<HTMLDivElement>;
}

interface MainHeaderProps {
  window?: () => Window;
  currentLinkIndex?: number;
}

export default function Header({ window, currentLinkIndex }: MainHeaderProps) {
  // const router = useRouter();
  const isWideEnough = useMediaQuery("(min-width:600px)", {
    defaultMatches: true,
  });

  // const [currentLinkIndex, setCurrentLinkIndex] = React.useState(-1);
  const headerRef = React.useRef<HTMLDivElement>(null);

  return (
    <ElevationScroll window={window} isWideEnough={isWideEnough}>
      <Paper ref={headerRef}>
        {isWideEnough === false ? (
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
