import React from "react";
import SingleBadge from "./SingleBadge";
import { Star, StarOutline, StarOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";

interface StarsBadgeProps {
  stars: number;
}

export default function StarsBadge({ stars }: StarsBadgeProps) {
  return (
    stars > 0 && (
      <SingleBadge
        number={stars ?? 0}
        icon={
          <StarOutline
            fontSize="small"
            sx={{
              strokeWidth: 0.3,
              strokeLinecap: "round",
              strokeMiterlimit: 10,
              stroke: "#FFD700",
              color: "#FFD700",
            }}
          />
        }
      />
    )
  );
}
