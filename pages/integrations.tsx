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
import { useRouter } from "next/router";
import fetchDbProjects from "@/utils/fetchDbProjects";

export default function Integrations({
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

  const [paginatedIntegrations, setPaginatedIntegrations] = React.useState(projects);

  const [page, setPage] = React.useState(1);

  const [filteredIntegrations, setFilteredIntegrations] = React.useState(paginatedIntegrations);
  useEffect(() => {
    setPagesNumber(Math.ceil(filteredIntegrations.length / itemsPerPage));
    setPage(1);
  }, [filteredIntegrations, itemsPerPage]);

  useEffect(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPaginatedIntegrations(filteredIntegrations.slice(start, end));
  }, [page, filteredIntegrations, itemsPerPage]);

  const router = useRouter();

  return (
    <Stack gap={2}>
      <Header currentLinkIndex={0} />
      <PageContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {projects || router.isFallback ? (
          <>
            <HeadingPage
              title={"Integrations"}
              subtitle={"Extend Home Assistant's functionality with additional devices/services"}
              count={count}
            />
            <FilterSearch projects={projects} setFilteredProjects={setFilteredIntegrations} />
            <Grid
              container
              spacing={2}
              columns={{
                xs: 1,
                sm: 2,
                md: 3,
              }}
            >
              {paginatedIntegrations.map((integration) => (
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
  return fetchDbProjects("integration", supabase);
}
