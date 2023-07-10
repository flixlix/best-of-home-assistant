import PageContainer from "@/layout/PageContainer";
import { theme } from "@/styles/theme";
import { Box, Grid, Paper, Stack } from "@mui/material";
import React from "react";
import ProjectMetadata from "./components/ProjectMetadata";
import { Project } from "@/types/Project";

type BlogLayoutProps = {
  children: React.ReactNode;
  gitReadmeUrl: string;
  path: string;
  gitRepoUrl: string;
  project: Project;
};

export default function BlogLayout({ children, gitRepoUrl, path, project }: BlogLayoutProps) {
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
          }}
        >
          {children}
        </Paper>
      </Stack>
    </PageContainer>
  );
}
