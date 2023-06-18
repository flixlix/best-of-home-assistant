import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import "../styles/Home.module.css";
import { Box, Stack } from "@mui/material";
import Hero from "@/index_page/components/Hero/Hero";
import CardProject from "@/index_page/components/CardProject/CardProject";
import ProjectTypes from "@/index_page/ProjectTypes/ProjectTypes";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main className={`${inter.className}`}>
        <Stack gap={2}>
          <Header />
          <ProjectTypes />
          {/* <Hero /> */}
          <Footer />
        </Stack>
      </main>
    </>
  );
}
