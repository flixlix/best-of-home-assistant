import React from "react";
import SingleBadge from "./SingleBadge";
import { Star } from "@mui/icons-material";
import { Typography } from "@mui/material";

interface StarsBadgeProps {
  stars: number;
}

export default function StarsBadge({ stars }: StarsBadgeProps) {
  return (
    <SingleBadge
      number={stars ?? 0}
      icon={
        <Star
          fontSize="small"
          sx={{
            color: "#FFD700",
          }}
        />
      }
    />
  );
}
