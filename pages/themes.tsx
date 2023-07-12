import React, { useEffect } from "react";
import supabase from "@supabase";
import { Grid, PaletteMode, Stack } from "@mui/material";
import { useMyStore } from "@/store/store";
import Header from "@/components/Header/Header";
import PageContainer from "@/layout/PageContainer";
import { Project } from "@/types/Project";
import CustomCardProject from "@/components/CustomCard/CustomCardProject";
import Footer from "@/components/Footer/Footer";
import FilterSearch from "@/components/FilterSearch/FilterSearch";
import Pagination from "@/components/Pagination/Pagination";
import HeadingPage from "@/components/HeadingPage/HeadingPage";
import LoadingState from "@/components/LoadingState/LoadingState";
import fetchDbProjects from "@/utils/fetchDbProjects";

export default function Themes({
  projects,
  count,
  fetchError,
}: {
  projects: Project[];
  count: number;
  fetchError?: string;
}) {
  const [itemsPerPage, setItemsPerPage] = React.useState(24);
  const [pagesNumber, setPagesNumber] = React.useState(Math.ceil(count / itemsPerPage));

  const { setAlert } = useMyStore();

  useEffect(() => {
    if (fetchError) {
      setAlert({
        type: "error",
        message: fetchError,
      });
    }
  }, [fetchError, setAlert]);

  const [paginatedThemes, setPaginatedThemes] = React.useState(projects);

  const [page, setPage] = React.useState(1);

  const [filteredThemes, setFilteredThemes] = React.useState(paginatedThemes);
  useEffect(() => {
    setPagesNumber(Math.ceil(filteredThemes.length / itemsPerPage));
    setPage(1);
  }, [filteredThemes, itemsPerPage]);

  useEffect(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPaginatedThemes(filteredThemes.slice(start, end));
  }, [page, filteredThemes, itemsPerPage]);

  return (
    <Stack gap={2}>
      <Header currentLinkIndex={3} />
      <PageContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {projects ? (
          <>
            <HeadingPage
              title={"Themes"}
              subtitle={"Customize the look and feel of your Home Assistant UI with these themes"}
              count={count}
            />
            <FilterSearch projects={projects} setFilteredProjects={setFilteredThemes} />
            <Grid
              container
              spacing={2}
              columns={{
                xs: 1,
                sm: 2,
                md: 3,
              }}
            >
              {paginatedThemes.map((integration) => (
                <Grid item key={integration.id} xs={1}>
                  <CustomCardProject project={integration} />
                </Grid>
              ))}
            </Grid>
            {pagesNumber > 1 && (
              <Pagination
                pagesNumber={pagesNumber}
                page={page}
                setPage={setPage}
                itemsPerPage={itemsPerPage}
                setItemsPerPage={setItemsPerPage}
              />
            )}
          </>
        ) : (
          <LoadingState />
        )}
      </PageContainer>
      <Footer />
    </Stack>
  );
}

export async function getStaticProps() {
  return fetchDbProjects("theme", supabase);
}
