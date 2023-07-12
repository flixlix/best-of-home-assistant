import PageContainer from "@/layout/PageContainer";
import { theme } from "@/styles/theme";
import { Alert, AlertTitle, Box, Chip, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import ProjectMetadata from "./components/ProjectMetadata";
import { Project } from "@/types/Project";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import numberToString from "@/utils/numberToString";

type BlogLayoutProps = {
  path: string;

  project: Project;
};

export default function BlogLayout({ path, project }: BlogLayoutProps) {
  console.log(typeof project.labels)
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
          <ProjectMetadata path={path} project={project} />
        </Paper>
        <Paper
          variant="outlined"
          sx={{
            p: 3,
            borderRadius: theme.shape.borderRadius + "px",
            whiteSpace: "pre-wrap",
            overflowWrap: "break-word",
            gap: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography variant="body1" sx={{ color: "text.primary" }}>
            {project.description}
          </Typography>

          {project.labels && project.labels.length > 0 && (
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {project.labels.map((label) => (
                <Chip key={label} label={label} />
              ))}
            </Box>
          )}

          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
            This page is still under heavy construction. Please check back for new features and updates.
          </Alert>
        </Paper>
      </Stack>
    </PageContainer>
  );
}
