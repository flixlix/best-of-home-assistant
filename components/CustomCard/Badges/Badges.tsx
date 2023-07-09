import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SingleBadge from "./SingleBadges/SingleBadge";
import { Project } from "@/types/Project";
import StarsBadge from "./SingleBadges/StarsBadge";
import QualityScoreBadge from "./SingleBadges/QualityScoreBadge";
import DownloadsBadge from "./SingleBadges/DownloadsBadge";

interface BadgesProps {
  project: Project;
}

export default function Badges({ project }: BadgesProps) {
  return (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <QualityScoreBadge score={project.projectrank} />
        <DownloadsBadge downloads={project.github_release_downloads} />
      </Stack>
      <StarsBadge stars={project.star_count} />
    </Stack>
  );
}
