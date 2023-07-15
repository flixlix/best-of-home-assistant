import { useScrollTrigger } from "@mui/material";
import React from "react";

interface ElevationScrollProps {
  window?: () => Window;
  children: React.ReactElement;
  isWideEnough?: boolean;
}

export default function ElevationScroll(props: ElevationScrollProps) {
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
