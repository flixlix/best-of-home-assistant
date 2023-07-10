import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import "../styles/Home.module.css";
import { PaletteMode, Stack, useMediaQuery } from "@mui/material";
import ProjectTypes from "@/index_page/ProjectTypes/ProjectTypes";
import Footer from "@/components/Footer/Footer";
import Hero from "@/index_page/components/Hero/Hero";
import Featured from "@/index_page/components/Hero/Featured";
import Sponsor from "@/index_page/components/Sponsor/Sponsor";
import PageContainer from "@/layout/PageContainer";

export default function Home({ toggleTheme, currTheme }: { toggleTheme: () => void; currTheme: PaletteMode }) {
  const isWideEnough = useMediaQuery((theme: any) => theme.breakpoints.up("md"));
  return (
    <Stack
      gap={4}
      sx={{
        height: "max-content",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header toggleTheme={toggleTheme} currTheme={currTheme}  />
      <Hero isWideEnough={isWideEnough} />
      <ProjectTypes />
      {isWideEnough && <Featured />}
      <Sponsor />
      <Footer />
    </Stack>
  );
}
