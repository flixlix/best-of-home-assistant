import React from "react";
import SingleBadge from "./SingleBadge";
import { WorkspacePremium } from "@mui/icons-material";

interface QualityScoreBadgeProps {
  score: number;
}

export default function QualityScoreBadge({ score }: QualityScoreBadgeProps) {
  return <SingleBadge number={score ?? 0} icon={<WorkspacePremium fontSize="small" color="primary" />} />;
}
