import React from "react";
import SingleBadge from "./SingleBadge";
import { Download } from "@mui/icons-material";

interface DownloadsBadgeProps {
  downloads: number;
}

export default function DownloadsBadge({ downloads }: DownloadsBadgeProps) {
  return <SingleBadge number={downloads ?? 0} icon={<Download fontSize="small" color="action" />} />;
}
