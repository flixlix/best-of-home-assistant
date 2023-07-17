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
import { useEffect, useState } from "react";

export default function Home({}: {}) {
  const isWideEnough = useMediaQuery((theme: any) => theme.breakpoints.up("md"));
  const [readme, setReadme] = useState("");

  async function fetchReadme() {
    const res = await fetch("https://raw.githubusercontent.com/flixlix/power-flow-card-plus/main/README.md");
    const text = await res.text();
    setReadme(text);
  }

  useEffect(() => {
    fetchReadme();
  });

  useEffect(() => {
    console.log(readme);
  }, [readme]);

  return (
    <Stack
      gap={4}
      sx={{
        height: "max-content",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Hero isWideEnough={isWideEnough} />
      <ProjectTypes />
      {isWideEnough && <Featured />}
      <Sponsor />
      <Footer />
    </Stack>
  );
}
