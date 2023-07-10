import PageContainer from "@/layout/PageContainer";
import { theme } from "@/styles/theme";
import { Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import ProjectMetadata from "./components/ProjectMetadata";
import { Project } from "@/types/Project";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import numberToString from "@/utils/numberToString";

type BlogLayoutProps = {
  path: string;
  gitRepoUrl: string;
  project: Project;
};

export default function BlogLayout({ gitRepoUrl, path, project }: BlogLayoutProps) {
  return (
    <PageContainer>
      <Stack gap={4}>
        <Paper
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: theme.shape.borderRadius + "px",
          }}
        >
          <ProjectMetadata gitRepoUrl={gitRepoUrl} path={path} project={project} />
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: theme.shape.borderRadius + "px",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
          }}
        >
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            {project.description}
          </Typography>
        </Paper>
      </Stack>
    </PageContainer>
  );
}
