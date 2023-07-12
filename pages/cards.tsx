import React, { useEffect } from "react";
import supabase from "@supabase";
import { Grid, PaletteMode, Stack, Typography } from "@mui/material";
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
import { NextRequest, NextResponse } from "next/server";
import fetchDbProjects from "@/utils/fetchDbProjects";

export default function Cards({
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

  const [paginatedCards, setPaginatedCards] = React.useState(projects);

  const [page, setPage] = React.useState(1);

  const [filteredCards, setFilteredCards] = React.useState(paginatedCards);
  useEffect(() => {
    setPagesNumber(Math.ceil(filteredCards.length / itemsPerPage));
    setPage(1);
  }, [filteredCards, itemsPerPage]);

  useEffect(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPaginatedCards(filteredCards.slice(start, end));
  }, [page, filteredCards, itemsPerPage]);

  return (
    <Stack gap={2}>
      <Header currentLinkIndex={1} />
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
              title={"Cards"}
              subtitle={"Customize the look and feel of your Home Assistant UI with these Lovelace cards"}
              count={count}
            />
            <FilterSearch projects={projects} setFilteredProjects={setFilteredCards} />
            <Grid
              container
              spacing={2}
              columns={{
                xs: 1,
                sm: 2,
                md: 3,
              }}
            >
              {paginatedCards.length === 0 ? (
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    No cards found
                  </Typography>
                </Grid>
              ) : (
                paginatedCards.map((integration) => (
                  <Grid item key={integration.id} xs={1}>
                    <CustomCardProject project={integration} />
                  </Grid>
                ))
              )}
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
  return fetchDbProjects("plugin", supabase);
}
