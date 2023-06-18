import PageContainer from "@/layout/PageContainer";
import React, { use, useEffect } from "react";
import CardProject from "../components/CardProject/CardProject";
import CardProjectType from "./CardProjectType";
import { Grid } from "@mui/material";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import DevicesOtherOutlinedIcon from "@mui/icons-material/DevicesOtherOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import theme from "@/styles/theme";
import axios from "axios";

export default function ProjectTypes() {
  const columnWidthSm = 12;
  const columnWidthMd = 6;
  const [repoNames, setRepoNames] = React.useState([]);
  const [repoData, setRepoData] = React.useState<string[]>([]);

  // fetch data from file in github repo
  async function getRepoNames() {
    await axios
      .get("https://raw.githubusercontent.com/hacs/default/master/plugin")
      .catch((err) => {
        console.error(err);
      })
      .then((res) => {
        setRepoNames(res?.data);
      });
  }

  async function getRepoData(repoName: string) {
    await axios
      .get(`https://api.github.com/repos/${repoName}`)
      .catch((err) => {
        console.error(err);
      })
      .then((res) => {
        setRepoData((repoData) => repoData.concat(res?.data));
      });
  }

  useEffect(() => {
    getRepoNames();
  }, []);

  useEffect(() => {
    console.log(repoNames);
    /* repoNames.forEach((repoName) => {
      getRepoData(repoName);
    }); */
  }, [repoNames]);

  useEffect(() => {
    console.log(repoData);
  }, [repoData]);

  return (
    <PageContainer>
      <Grid
        container
        spacing={4}
        sx={{
          paddingX: 20,
          [theme.breakpoints.between("xs", "md")]: {
            paddingX: 0,
          },
          [theme.breakpoints.between("md", "xl")]: {
            paddingX: "5vw",
          },
        }}
      >
        <Grid item xs={columnWidthSm} md={columnWidthMd}>
          <CardProjectType
            title="Integrations"
            description="Extend Home Assistant's functionality with additional devices/services"
            icon={<DevicesOtherOutlinedIcon />}
          />
        </Grid>
        <Grid item xs={columnWidthSm} md={columnWidthMd}>
          <CardProjectType
            title="Cards"
            description="Customize the look and feel of your Home Assistant UI with these Lovelace cards"
            icon={<PhotoSizeSelectActualOutlinedIcon />}
          />
        </Grid>
        <Grid item xs={columnWidthSm} md={columnWidthMd}>
          <CardProjectType
            title="Scripts"
            description="Automate your Home Assistant with these scripts and automations"
            icon={<DescriptionOutlinedIcon />}
          />
        </Grid>
        <Grid item xs={columnWidthSm} md={columnWidthMd}>
          <CardProjectType
            title="Themes"
            description="Customize the look and feel of your Home Assistant UI with these themes"
            icon={<ColorLensOutlinedIcon />}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
