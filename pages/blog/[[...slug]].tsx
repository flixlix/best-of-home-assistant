import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Sponsor from "@/index_page/components/Sponsor/Sponsor";
import { Stack, Typography } from "@mui/material";
import React from "react";
import BlogLayout from "@/blog/BlogLayout";
import supabase from "@supabase";
import { Project } from "@/types/Project";
import { PostgrestError } from "@supabase/supabase-js";
import Error from "next/error";
import fetchDbProjectRow from "@/utils/fetchDbProjectRow";
import { useRouter } from "next/router";

interface Props {
  gitRepoUrl: string;
  path: string;
  error: PostgrestError;
  project: Project;
}

export default function Blog({ path, error, project }: Props) {
  /*   useEffect(() => {
    async function fetchDbProject() {
      try {
        const response = await axios.get(`/api/get-db-row?path=${path}`);
        console.log(response.data);

        if (response.status !== 200) {
          throw fetchError;
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchDbProject();
  }, []); */

  console.log(project);
  const router = useRouter();

  if (error || !project || router.isFallback) {
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

export async function getStaticProps({ params }: { params: any }) {
  const path = params.slug?.join("/");
  return fetchDbProjectRow(path, supabase);
}

export async function getStaticPaths() {
  const { data, error } = await supabase.from("best-of-ha").select("github_id");
  if (error) {
    console.error(error);
  }
  if (!data) {
    return {
      paths: [],
      fallback: true,
    };
  }

  return {
    paths: [...data.map((project: { github_id: any }) => `/blog/${project.github_id}`)],
    fallback: false,
  };
}
