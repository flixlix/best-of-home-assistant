import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import "../styles/Home.module.css";
import { PaletteMode, Stack } from "@mui/material";
import ProjectTypes from "@/index_page/ProjectTypes/ProjectTypes";
import Footer from "@/components/Footer/Footer";

export default function Home({ toggleTheme, currTheme }: { toggleTheme: () => void; currTheme: PaletteMode }) {
  return (
    <Stack gap={2}>
      <Header toggleTheme={toggleTheme} currTheme={currTheme} />
      <ProjectTypes />
      <Footer />
    </Stack>
  );
}
