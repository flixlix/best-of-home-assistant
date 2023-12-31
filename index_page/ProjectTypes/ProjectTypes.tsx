import PageContainer from "@/layout/PageContainer";
import React from "react";
import CardProjectType from "./CardProjectType";
import { Grid } from "@mui/material";
import PhotoSizeSelectActualOutlinedIcon from "@mui/icons-material/PhotoSizeSelectActualOutlined";
import DevicesOtherOutlinedIcon from "@mui/icons-material/DevicesOtherOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import { theme } from "@/styles/theme";

export default function ProjectTypes() {
  const columnWidthSm = 12;
  const columnWidthMd = 6;

  return (
    <PageContainer>
      <Grid
        container
        spacing={2}
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
            href="/integrations"
            description="Extend Home Assistant's functionality with additional devices/services"
            icon={<DevicesOtherOutlinedIcon />}
          />
        </Grid>
        <Grid item xs={columnWidthSm} md={columnWidthMd}>
          <CardProjectType
            title="Cards"
            href="/cards"
            description="Customize the look and feel of your Home Assistant UI with these Lovelace cards"
            icon={<PhotoSizeSelectActualOutlinedIcon />}
          />
        </Grid>
        <Grid item xs={columnWidthSm} md={columnWidthMd}>
          <CardProjectType
            title="Scripts"
            href="/scripts"
            description="Automate your Home Assistant with these scripts and automations"
            icon={<DescriptionOutlinedIcon />}
          />
        </Grid>
        <Grid item xs={columnWidthSm} md={columnWidthMd}>
          <CardProjectType
            title="Themes"
            href="/themes"
            description="Customize the look and feel of your Home Assistant UI with these themes"
            icon={<ColorLensOutlinedIcon />}
          />
        </Grid>
      </Grid>
    </PageContainer>
  );
}
