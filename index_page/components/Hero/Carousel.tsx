import { theme } from "@/styles/theme";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper } from "@mui/material";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { FeaturedProject } from "./data";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface CarouselProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  featuredProjects: FeaturedProject[];
}

export default function Carousel({ activeStep, setActiveStep, featuredProjects }: CarouselProps) {
  const maxSteps = featuredProjects.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  return (
    <Box
      sx={{
        maxWidth: 400,
        flexGrow: 1,
        borderRadius: theme.shape.borderRadius + "px",
        "& .MuiMobileStepper-root": {
          bgcolor: "transparent",
          position: "relative",
          bottom: "1px",
        },
      }}
    >
      <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange} interval={10000}>
        {featuredProjects.map((step, index) => (
          <Box key={step.title}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  backgroundColor: "background.paper",
                  height: 350,
                  display: "block",
                  width: "100%",
                  overflow: "hidden",
                  objectFit: "scale-down",
                  borderTopLeftRadius: theme.shape.borderRadius + "px",
                  borderTopRightRadius: theme.shape.borderRadius + "px",
                }}
                src={step.imgPath}
                alt={step.title}
              />
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{
          borderBottomLeftRadius: theme.shape.borderRadius + "px",
          borderBottomRightRadius: theme.shape.borderRadius + "px",
          "& .MuiMobileStepper-dots": {
            gap: 0.5,
          },
          "& .MuiMobileStepper-dot": {
            backgroundColor: "text.disabled",
            opacity: 0.5,
          },
          "& .MuiMobileStepper-dotActive ": {
            backgroundColor: "primary.main",
            opacity: 1,
          },
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
}
