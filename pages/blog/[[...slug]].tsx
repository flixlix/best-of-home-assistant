import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sponsor from "@/index_page/components/Sponsor/Sponsor";
import { Box, Button, Link, Stack, TableContainer, Typography } from "@mui/material";
import axios from "axios";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import React, { useEffect } from "react";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { v4 as uuidv4 } from "uuid";
import MDRender from "@/blog/components/MDRender";
import BlogLayout from "@/blog/BlogLayout";
import supabase from "@supabase";
import { Project } from "@/types/Project";
import { PostgrestError } from "@supabase/supabase-js";
import Error from "next/error";

interface Props {
  gitRepoUrl: string;
  path: string;
  fetchError: PostgrestError;
  project: Project;
}

export default function Blog({ path, fetchError, project }: Props) {
  if (fetchError || !project) {
    return (
      <Error statusCode={404} title="Project not found">
        <Typography variant="h1">Project not found</Typography>
      </Error>
    );
  }

  return (
    <>
      <Stack
        gap={4}
        sx={{
          height: "max-content",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Roboto",
        }}
      >
        <Header />
        {project && <BlogLayout path={path} project={project}></BlogLayout>}
        <Sponsor />
        <Footer />
      </Stack>
    </>
  );
}

export async function getServerSideProps({ params }: { params: any }) {
  const path = params.slug?.join("/");
  const { data: project, error: fetchError } = await supabase
    .from("best-of-list")
    .select("*")
    .eq("github_id", path)
    .single();

  return {
    props: { path, project, fetchError },
  };
}
