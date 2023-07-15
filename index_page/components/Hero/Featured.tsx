import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Paper, Stack } from "@mui/material";
import PageContainer from "@/layout/PageContainer";
import FeaturedDescription from "./FeaturedDescription";
import { useMyStore } from "@/store/store";
import { theme } from "@/styles/theme";
import { featuredProjects } from "./data";
import Carousel from "./Carousel";

export default function Featured() {
  const { theme: themeMode } = useMyStore();
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <PageContainer>
      <Paper
        variant="outlined"
        sx={{
          backgroundColor: "background.paper",
          p: 3,
          borderColor: themeMode === "dark" ? theme.palette.primary.dark : "#D9EDFB",
          transition: "all 0.2s ease-in-out",
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          borderRadius: theme.shape.borderRadius + "px",
        }}
      >
        <Stack display={"grid"} gridTemplateColumns={"2fr 1fr"} gap={4}>
          <FeaturedDescription item={featuredProjects[activeStep]} />
          <Carousel featuredProjects={featuredProjects} activeStep={activeStep} setActiveStep={setActiveStep} />
        </Stack>
      </Paper>
    </PageContainer>
  );
}
