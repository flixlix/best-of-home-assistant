import React from "react";
import SingleBadge from "./SingleBadge";
import { Commit, ForkRight, WorkspacePremium, WorkspacePremiumOutlined } from "@mui/icons-material";
import { useMyStore } from "@/store/store";
import Icon from "@mdi/react";
import { mdiSourcePull } from "@mdi/js";

interface PRBadgeProps {
  PR: number;
}

export default function PRBadge({ PR }: PRBadgeProps) {
  const { theme } = useMyStore();
  return (
    <SingleBadge
      number={PR ?? 0}
      icon={
        <Icon
          path={mdiSourcePull}
          size={0.75}
          style={{
            color: theme === "dark" ? "#bbb" : "rgba(0,0,0,0.54)",
          }}
        />
      }
    />
  );
}
