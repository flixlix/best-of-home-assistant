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

export default function Cards({
  toggleTheme,
  currTheme,
  cards,
  count,
  fetchError,
}: {
  toggleTheme: () => void;
  currTheme: PaletteMode;
  cards: Project[];
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

  const [paginatedCards, setPaginatedCards] = React.useState(cards);

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
      <Header toggleTheme={toggleTheme} currTheme={currTheme} currentLinkIndex={1} />
      <PageContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {cards ? (
          <>
            <HeadingPage
              title={"Cards"}
              subtitle={"Customize the look and feel of your Home Assistant UI with these Lovelace cards"}
              count={count}
            />
            <FilterSearch projects={cards} setFilteredProjects={setFilteredCards} />
            <Grid
              container
              spacing={2}
              columns={{
                xs: 1,
                sm: 2,
                md: 3,
              }}
            >
              {paginatedCards.map((integration) => (
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
  const {
    data: cards,
    count,
    error,
  } = await supabase.from("best-of-list").select("*", { count: "exact" }).eq("category", "plugin");

  if (error) {
    console.error("Error fetching data from Supabase:", error);
    return { props: { fetchError: error.message || error } };
  }
  return { props: { cards, count } };
}
