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
import { theme } from "@/styles/theme";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Featured() {
  const images = [
    {
      title: "Power Flow Card Plus",
      repo: "https://github.com/flixlix/power-flow-card-plus",
      author: {
        name: "flixlix",
        profile: "https://github.com/flixlix",
      },
      description: (
        <Stack>
          <Typography>
            This new lovelace card is meant to be a replacement for the original Power Flow Card. It is a complete
            rewrite of the original card and adds a lot of new features. In addition to the original features, it now
            also supports:
          </Typography>
          <ul>
            <li>
              <Typography>Individual devices</Typography>
            </li>
            <li>
              <Typography>Secondary Information (e.g. current, voltage, power factor, etc.)</Typography>
            </li>
            <li>
              <Typography>Customizable icons, colors, names and units</Typography>
            </li>
            <li>
              <Typography>UI Editor</Typography>
            </li>
            <li>
              <Typography>Translations</Typography>
            </li>
            <li>
              <Typography>And more...</Typography>
            </li>
          </ul>
        </Stack>
      ),
      imgPath: "https://user-images.githubusercontent.com/61006057/227771568-78497ecc-e863-46f2-b29e-e15c7c20a154.gif",
    },
    {
      title: "Mushroom",
      repo: "https://github.com/piitaya/lovelace-mushroom",
      author: {
        name: "piitaya",
        profile: "https://github.com/piitaya",
      },
      imgPath: "https://user-images.githubusercontent.com/5878303/152332130-760cf616-5c40-4825-a482-bb8f1f0f5251.png",
      description: (
        <Stack>
          <Typography>
            Mushroom is a collection of cards for Home Assistant Dashboard UI. Mushroom mission is to propose easy to
            use components to build your Home Assistant dashboard. Here are a few of the cards available:
          </Typography>
          <ul>
            <li>
              <Typography>Alarm card</Typography>
            </li>
            <li>
              <Typography>Cover card</Typography>
            </li>
            <li>
              <Typography>Fan card</Typography>
            </li>
            <li>
              <Typography>Light card</Typography>
            </li>
            <li>
              <Typography>Chips card</Typography>
            </li>
            <li>
              <Typography>Media card</Typography>
            </li>
            <li>
              <Typography>And more...</Typography>
            </li>
          </ul>
        </Stack>
      ),
    },
    {
      title: "Scheduler Card",
      repo: "https://github.com/nielsfaber/scheduler-card",
      author: {
        name: "nielsfaber",
        profile: "https://github.com/nielsfaber",
      },
      imgPath: "https://raw.githubusercontent.com/nielsfaber/scheduler-card/main/screenshots/Demonstration.gif",
      description: (
        <Stack>
          <Typography>
            This handy card allows you to set up schedules for your entities directly in Lovelace. It supports a wide
            range of entities, including lights, switches, covers, fans, climate, scripts, scenes, and input_booleans.
            It also supports the following features:
          </Typography>
          <ul>
            <li>
              <Typography>Configure state of schedule after running</Typography>
            </li>
            <li>
              <Typography>Configure schedule to run on specific times</Typography>
            </li>
            <li>
              <Typography>Configure schedule to run on specific dates</Typography>
            </li>
            <li>
              <Typography>Filter by entity domain</Typography>
            </li>
            <li>
              <Typography>And more...</Typography>
            </li>
          </ul>
        </Stack>
      ),
    },
  ];
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <PageContainer>
      <Paper
        variant="outlined"
        sx={{
          backgroundColor: "background.paper",
          p: 3,
          borderColor: "#D9EDFB",
          transition: "all 0.2s ease-in-out",
          borderWidth: 2,
          alignItems: "center",
          justifyContent: "center",
          boxSizing: "border-box",
          borderRadius: theme.shape.borderRadius + "px",
        }}
      >
        <Stack display={"grid"} gridTemplateColumns={"2fr 1fr"} gap={4}>
          <FeaturedDescription item={images[activeStep]} />
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
              {images.map((step, index) => (
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
        </Stack>
      </Paper>
    </PageContainer>
  );
}
