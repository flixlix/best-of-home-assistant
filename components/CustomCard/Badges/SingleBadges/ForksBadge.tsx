import React from "react";
import SingleBadge from "./SingleBadge";
import { ForkRight, WorkspacePremium, WorkspacePremiumOutlined } from "@mui/icons-material";
import { useMyStore } from "@/store/store";

interface ForksBadgeProps {
  forks: number;
}

export default function ForksBadge({ forks }: ForksBadgeProps) {
  const { theme } = useMyStore();
  return (
    <SingleBadge
      number={forks ?? 0}
      icon={
        <ForkRight
          fontSize="small"
          sx={{
            color: theme === "dark" ? "#bbb" : "action.active",
          }}
        />
      }
    />
  );
}
