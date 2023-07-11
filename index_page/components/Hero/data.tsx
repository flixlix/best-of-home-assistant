import { Stack, Typography } from "@mui/material";

export interface FeaturedProject {
  title: string;
  repo: string;
  author: {
    name: string;
    profile: string;
  };
  description: JSX.Element;
  imgPath: string;
};

export const featuredProjects: FeaturedProject[] = [
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
          This new lovelace card is meant to be a replacement for the original Power Flow Card. It is a complete rewrite
          of the original card and adds a lot of new features. In addition to the original features, it now also
          supports:
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
          Mushroom is a collection of cards for Home Assistant Dashboard UI. Mushroom mission is to propose easy to use
          components to build your Home Assistant dashboard. Here are a few of the cards available:
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
          range of entities, including lights, switches, covers, fans, climate, scripts, scenes, and input_booleans. It
          also supports the following features:
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
