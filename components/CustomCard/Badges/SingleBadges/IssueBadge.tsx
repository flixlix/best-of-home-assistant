import React from "react";
import SingleBadge from "./SingleBadge";
import { Adjust, Commit, ForkRight, WorkspacePremium, WorkspacePremiumOutlined } from "@mui/icons-material";
import { useMyStore } from "@/store/store";
import Icon from "@mdi/react";
import { mdiSourcePull } from "@mdi/js";

interface IssueBadgeIssuePropps {
  issue: number;
  issueClosed: number;
}

export default function IssueBadge({ issue, issueClosed }: IssueBadgeIssuePropps) {
  const { theme } = useMyStore();
  return (
    <SingleBadge
      number={issue ?? 0}
      numberRange = {issueClosed ?? 0}
      icon={
        <Adjust
          fontSize="small"
          sx={{
            color: theme === "dark" ? "#bbb" : "action.active",
          }}
        />
      }
    />
  );
}
