import Badges from "@/components/CustomCard/Badges/Badges";
import { Project } from "@/types/Project";
import { Launch, Star } from "@mui/icons-material";
import { IconButton, Link, Stack, Typography } from "@mui/material";
import supabase from "@supabase";
import axios from "axios";

import React from "react";

interface ProjectMetadataProps {
  path: string;
  project: Project;
}

export default function ProjectMetadata({ project }: ProjectMetadataProps) {
  console.log(project);
  return (
    <Stack gap={2}>
      <Stack direction="row" justifyContent="space-between" alignItems={"center"}>
        <Stack direction={"row"} gap={1} alignItems={"baseline"}>
          <Typography
            variant={"h3"}
            sx={{
              color: "text.primary",
              fontWeight: "bold",
              maxWidth: "20ch",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {project.name}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "400", color: "text.secondary" }}>
            by{" "}
            <Link
              sx={{
                color: "inherit",
                textDecoration: "none",
                /* underline on hover */
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              href={`https://github.com/${project.github_id.split("/")[0]}`}
              target="_blank"
            >
              {project.github_id.split("/")[0]}
            </Link>
          </Typography>
        </Stack>
        <IconButton
          sx={{
            height: "max-content",
          }}
          href={project.github_url}
          target="_blank"
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
