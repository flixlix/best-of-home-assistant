import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import PageContainer from "@/layout/PageContainer";
import { Box, Button, PaletteMode, Stack, Typography } from "@mui/material";

export default function Custom404() {
  return (
    <Stack gap={2} height={"100vh"} boxSizing={"border-box"}>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          gap: 0,
        }}
      >
        <PageContainer maxWidth="xs">
          <Stack gap={2} sx={{ textAlign: "center" }}>
            <Typography variant="h1" fontSize={"4rem"}>
              😢
            </Typography>
            <Typography variant="h1" fontSize={"4rem"}>
              404
            </Typography>

            <Typography variant="body2" color={"grey"} fontSize={"1rem"} gutterBottom>
              Page not found
            </Typography>
          </Stack>
          <Typography
            sx={{
              marginTop: 5,
            }}
          >
            I searched the entire universe, but I couldn&apos;t find the page you were looking for. Fortunately I found
            a way to go back to the home page.
          </Typography>
          <Button
            href={"/"}
            variant="contained"
            size="large"
            fullWidth
            sx={{
              marginTop: 2,
              marginBottom: 4,
              fontSize: "1.5rem",
            }}
          >
            Go back to home
          </Button>
          <Typography variant="body2" color={"grey"} fontSize={"1rem"}>
            Or you can simply
          </Typography>
          <Button
            onClick={() => window.history.back()}
            size="large"
            fullWidth
            sx={{
              marginTop: 2,
              fontSize: "1.5rem",
              boxShadow: "0px 0px 7px rgba(0, 0, 0, 0.15)",
            }}
          >
            Go back
          </Button>
        </PageContainer>
      </Box>
      <Footer />
    </Stack>
  );
}
