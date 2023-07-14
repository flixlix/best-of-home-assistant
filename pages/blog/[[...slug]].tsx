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
import Error from "next/error";

interface Props {
  gitRepoUrl: string;
  toggleTheme: () => void;
  currTheme: "light" | "dark";
  path: string;
  project: Project;
}

export default function Blog({ gitRepoUrl, toggleTheme, currTheme, path, project }: Props) {
  if (!project || !project.github_id || !project.github_url || !project.name) {
    return <Error statusCode={404} />;
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
        <Header toggleTheme={toggleTheme} currTheme={currTheme} />

        <BlogLayout path={path} gitRepoUrl={gitRepoUrl} project={project}></BlogLayout>
        <Sponsor />
        <Footer />
      </Stack>
    </>
  );
}

export async function getServerSideProps({ params }: { params: any }) {
  const path = params.slug?.join("/");
  // const defaultBranch = await axios
  //   .get(`https://api.github.com/repos/${params.slug?.[0]}/${params.slug?.[1]}`)
  //   .then((res) => res.data.default_branch)
  //   .catch((err) => console.log(err));
  // const gitReadmeUrl = `https://raw.githubusercontent.com/${params.slug?.[0]}/${params.slug?.[1]}/${
  //   defaultBranch ?? "main"
  // }/README.md`;
  const gitRepoUrl = `https://github.com/${params.slug?.[0]}/${params.slug?.[1]}`;
  // const response = await axios.get(gitReadmeUrl);
  // const data = response.data;

  const { data: project } = await supabase.from("best-of-list").select("*").eq("github_id", path).single();

  return {
    props: { path, gitRepoUrl, project },
  };
}
