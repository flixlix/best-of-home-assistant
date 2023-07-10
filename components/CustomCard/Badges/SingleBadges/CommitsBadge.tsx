import React from "react";
import SingleBadge from "./SingleBadge";
import { Commit, ForkRight, WorkspacePremium, WorkspacePremiumOutlined } from "@mui/icons-material";
import { useMyStore } from "@/store/store";

interface CommitsBadgeProps {
  commits: number;
}

export default function CommitsBadge({ commits }: CommitsBadgeProps) {
  const { theme } = useMyStore();
  return (
    <SingleBadge
      number={commits ?? 0}
      icon={
        <Commit
          fontSize="small"
          sx={{
            color: theme === "dark" ? "#bbb" : "action.active",
          }}
        />
      }
    />
  );
}
