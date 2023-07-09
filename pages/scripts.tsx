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

export default function Scripts({
  toggleTheme,
  currTheme,
  scripts,
  count,
  fetchError,
}: {
  toggleTheme: () => void;
  currTheme: PaletteMode;
  scripts: Project[];
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

  const [paginatedScripts, setPaginatedScripts] = React.useState(scripts);

  const [page, setPage] = React.useState(1);

  const [filteredScripts, setFilteredScripts] = React.useState(paginatedScripts);
  useEffect(() => {
    setPagesNumber(Math.ceil(filteredScripts.length / itemsPerPage));
    setPage(1);
  }, [filteredScripts, itemsPerPage]);

  useEffect(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setPaginatedScripts(filteredScripts.slice(start, end));
  }, [page, filteredScripts, itemsPerPage]);

  return (
    <Stack gap={2}>
      <Header toggleTheme={toggleTheme} currTheme={currTheme} currentLinkIndex={2} />
      <PageContainer
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <HeadingPage
          title={"Scripts"}
          subtitle={"Automate your Home Assistant with these scripts and automations"}
          count={count}
        />
        <FilterSearch projects={scripts} setFilteredProjects={setFilteredScripts} />
        <Grid
          container
          spacing={2}
          columns={{
            xs: 1,
            sm: 2,
            md: 3,
          }}
        >
          {paginatedScripts.map((integration) => (
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
      </PageContainer>
      <Footer />
    </Stack>
  );
}

export async function getStaticProps() {
  const {
    data: scripts,
    count,
    error,
  } = await supabase
    .from("best-of-list")
    .select("*", { count: "exact" })
    .in("category", ["appdaemon", "python_script"]);

  if (error) {
    console.error("Error fetching data from Supabase:", error);
    return {
      props: {
        fetchError: error.message || error,
      },
    };
  }
  return {
    props: {
      scripts,
      count,
    },
  };
}
