import { Card, CardActionArea, Stack } from "@mui/material";
import React from "react";

interface CustomCardBaseProps {
  href: string;
  openNewTab?: boolean;
  height?: number | string;
  children?: React.ReactNode;
  topChildren?: React.ReactNode;
}

export default function CustomCardBase({
  href = "/",
  openNewTab,
  children,
  topChildren,
  height = 105,
}: CustomCardBaseProps) {
  return (
    <Card
      variant="outlined"
      sx={{
        transition: "all 0.2s ease-in-out",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <CardActionArea href={href} target={openNewTab ? "_blank" : "_self"}>
        <Stack height={height} p={3} gap={2} display={"flex"} direction={"column"} justifyContent={"start"}>
          {topChildren}
          <Stack gap={1} direction={"column"}>
            {children}
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
