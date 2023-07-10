import { halfSpace } from "@/utils/halfSpaceChar";
import millify from "@/utils/millify";
import { Stack, Tooltip, Typography } from "@mui/material";
import React from "react";

interface SingleBadgeProps {
  number: number;
  numberRange?: number;
  icon: React.ReactNode;
}

export default function SingleBadge({ number, numberRange, icon }: SingleBadgeProps) {
  return (
    <Tooltip title={millify(number, 3)}>
      <Stack direction={"row"} alignItems={"center"} gap={0.3}>
        {icon}
        <Typography variant={"body2"} color={"gray"}>
          {millify(number, 1)}
          {numberRange && `${halfSpace}/${halfSpace}${millify(numberRange, 1)}`}
        </Typography>
      </Stack>
    </Tooltip>
  );
}
