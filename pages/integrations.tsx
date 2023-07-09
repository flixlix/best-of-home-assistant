import React, { useEffect } from "react";
import supabase from "@supabase";
import { Grid, PaletteMode, Stack, Button } from "@mui/material";
import { useMyStore } from "@/store/store";
import Header from "@/components/Header/Header";
import PageContainer from "@/layout/PageContainer";
import { Project } from "@/types/Project";
import CustomCardProject from "@/components/CustomCard/CustomCardProject";

export default function Integrations({
  toggleTheme,
  currTheme,
  integrations,
  fetchError,
}: {
  toggleTheme: () => void;
  currTheme: PaletteMode;
  integrations: Project[];
  fetchError?: string;
}) {
  const { setAlert } = useMyStore();

  useEffect(() => {
    if (fetchError) {
      setAlert({
        type: "error",
        message: fetchError,
      });
    }
  }, [fetchError, setAlert]);

  return (
    <Stack gap={2}>
      <Header toggleTheme={toggleTheme} currTheme={currTheme} />
      <PageContainer>
        <Grid
          container
          spacing={2}
          columns={{
            xs: 1,
            sm: 2,
            md: 3,
          }}
        >
          {integrations.map((integration) => (
            <Grid item key={integration.id} xs={1}>
              <CustomCardProject project={integration} />
            </Grid>
          ))}
        </Grid>
      </PageContainer>
    </Stack>
  );
}

export async function getStaticProps() {
  const { data: integrations, error } = await supabase.from("best-of-list").select("*").eq("category", "integration");
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
      integrations,
    },
  };
}
