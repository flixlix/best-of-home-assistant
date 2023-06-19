import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import "../styles/Home.module.css";
import { Box, Button, PaletteMode, Stack } from "@mui/material";
import Hero from "@/index_page/components/Hero/Hero";
import CardProject from "@/index_page/components/CardProject/CardProject";
import ProjectTypes from "@/index_page/ProjectTypes/ProjectTypes";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import Views from "@/components/PageViews/Views";
import { SupabaseAdmin } from "@/lib/supabase/supabaseAdmin";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ toggleTheme, currTheme }: { toggleTheme: () => void; currTheme: PaletteMode }) {
  return (
    <>
      <main className={`${inter.className}`}>
        <Stack gap={2}>
          <Header toggleTheme={toggleTheme} currTheme={currTheme} />
          <ProjectTypes />
          <Footer />
        </Stack>
      </main>
    </>
  );
}
