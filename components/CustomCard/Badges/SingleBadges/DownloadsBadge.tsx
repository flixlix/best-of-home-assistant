import React from "react";
import SingleBadge from "./SingleBadge";
import { Download, FileDownloadOutlined } from "@mui/icons-material";
import { useMyStore } from "@/store/store";

interface DownloadsBadgeProps {
  downloads: number;
}

export default function DownloadsBadge({ downloads }: DownloadsBadgeProps) {
  const { theme } = useMyStore();
  return (
    downloads > 0 && (
      <SingleBadge
        number={downloads ?? 0}
        icon={
          <FileDownloadOutlined
            fontSize="small"
            sx={{
              color: theme === "dark" ? "#bbb" : "action.active",
            }}
          />
        }
      />
    )
  );
}
