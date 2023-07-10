import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sponsor from "@/index_page/components/Sponsor/Sponsor";
import { Box, Button, Link, Stack, TableContainer, Typography } from "@mui/material";
import axios from "axios";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import React from "react";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import { theme } from "@/styles/theme";
import { v4 as uuidv4 } from "uuid";
import MDRender from "@/blog/components/MDRender";
import BlogLayout from "@/blog/BlogLayout";
import supabase from "@supabase";
import { Project } from "@/types/Project";

interface Props {
  gitReadmeUrl: string;
  gitRepoUrl: string;
  readmePost: string;
  toggleTheme: () => void;
  currTheme: "light" | "dark";
  path: string;
  project: Project;
}

export default function Blog({ readmePost, gitReadmeUrl, gitRepoUrl, toggleTheme, currTheme, path, project }: Props) {
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
        <Header toggleTheme={toggleTheme} currTheme={currTheme} />

        <BlogLayout gitReadmeUrl={gitReadmeUrl} path={path} gitRepoUrl={gitRepoUrl} project={project}>
          <MDRender readmePost={readmePost} />
        </BlogLayout>
        <Sponsor />
        <Footer />
      </Stack>
    </>
  );
}

export async function getServerSideProps({ params }: { params: any }) {
  const path = params.slug?.join("/");
  const gitReadmeUrl = `https://raw.githubusercontent.com/${params.slug?.[0]}/${params.slug?.[1]}/main/README.md`;
  const gitRepoUrl = `https://github.com/${params.slug?.[0]}/${params.slug?.[1]}`;
  const response = await axios.get(gitReadmeUrl);
  const data = response.data;

  const { data: project } = await supabase.from("best-of-list").select("*").eq("github_id", path).single();

  return {
    props: { readmePost: data, gitReadmeUrl, path, gitRepoUrl, project },
  };
}
