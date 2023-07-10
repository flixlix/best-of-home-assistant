import { CheckCircle } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SingleBadge from "./SingleBadges/SingleBadge";
import { Project } from "@/types/Project";
import StarsBadge from "./SingleBadges/StarsBadge";
import QualityScoreBadge from "./SingleBadges/QualityScoreBadge";
import DownloadsBadge from "./SingleBadges/DownloadsBadge";
import ForksBadge from "./SingleBadges/ForksBadge";
import CommitsBadge from "./SingleBadges/CommitsBadge";
import PRBadge from "./SingleBadges/PRBadge";
import IssueBadge from "./SingleBadges/IssueBadge";

interface BadgesProps {
  project: Project;
  distribute?: boolean;
  advanced?: boolean;
}

export default function Badges({ project, distribute = true, advanced = false }: BadgesProps) {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={distribute ? "space-between" : "flex-start"}
      gap={distribute ? 0 : advanced ? 2 : 1}
    >
      <Stack direction={"row"} alignItems={"center"} gap={advanced ? 2 : 1}>
        <QualityScoreBadge score={project.projectrank} />
        <DownloadsBadge downloads={project.github_release_downloads} />
      </Stack>
      <StarsBadge stars={project.star_count} />
      {advanced && (
        <>
          <ForksBadge forks={project.fork_count} />
          <CommitsBadge commits={project.commit_count} />
          <PRBadge PR={project.pr_count} />
          <IssueBadge issue={project.open_issue_count} issueClosed={project.closed_issue_count} />
        </>
      )}
    </Stack>
  );
}
