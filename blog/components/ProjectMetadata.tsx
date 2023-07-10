import Badges from "@/components/CustomCard/Badges/Badges";
import { Project } from "@/types/Project";
import { Launch, Star } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";
import supabase from "@supabase";
import axios from "axios";
import React from "react";

interface ProjectMetadataProps {
  gitRepoUrl: string;
  path: string;
  project: Project;
}

export default function ProjectMetadata({ gitRepoUrl, project }: ProjectMetadataProps) {
  return (
    <Stack gap={2}>
      <Stack direction="row" justifyContent="space-between" alignItems={"center"}>
        <Stack>
          <Typography variant="h4">{project.name}</Typography>
          <Typography variant="body1">{project.description}</Typography>
        </Stack>
        <IconButton
          href={gitRepoUrl}
          target="_blank"
          sx={{
            height: "max-content",
          }}
        >
          <Launch />
        </IconButton>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems={"center"}>
        <Badges project={project} distribute={false} advanced />
      </Stack>
    </Stack>
  );
}
