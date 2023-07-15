import React from "react";
import SingleBadge from "./SingleBadge";
import { WorkspacePremium, WorkspacePremiumOutlined } from "@mui/icons-material";

interface QualityScoreBadgeProps {
  score: number;
}

export default function QualityScoreBadge({ score }: QualityScoreBadgeProps) {
  // return <SingleBadge number={score ?? 0} icon={<WorkspacePremiumOutlined fontSize="small" color="primary" />} />;
  return <span></span>
}
