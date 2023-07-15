import { Project } from "@/types/Project";
import { Chip, Stack, Typography } from "@mui/material";
import CustomCardBase from "./CustomCardBase";
import Badges from "./Badges/Badges";
import createEmojisFromString from "@/utils/magicCreateEmojis";
import { useMyStore } from "@/store/store";
import { useEffect, useState } from "react";

interface CustomCardProjectProps {
  project: Project;
}

export default function CustomCardProject({ project }: CustomCardProjectProps) {
  const { showBadges } = useMyStore();
  const nameCharacterLimit = 25;
  const name =
    project.name.replace("integration", "").length > nameCharacterLimit
      ? project.name.replace("integration", "").substring(0, nameCharacterLimit) + "..."
      : project.name.replace("integration", "");

  const [labels, setLabels] = useState<(string | undefined)[]>([]);

  function filterElementsByCharacterCount(array: string[]): string[] {
    if (!array || array.length === 0) return [];
    const maxLength = 50;
    const spacing = 5;
    let characterCount = 0;
    let filteredArray: string[] = [];
    for (const str of array) {
      if (characterCount + str.length + spacing <= maxLength) {
        characterCount += str.length + spacing;
        filteredArray.push(str);
      } else {
        break;
      }
    }
    return filteredArray;
  }

  useEffect(() => {
    if (project.labels) {
      setLabels(filterElementsByCharacterCount(project.labels));
    }
  }, [project.labels]);

  return (
    <CustomCardBase
      href={`/blog/${project.github_id}`}
      height={showBadges ? 180 : 110}
      bottomChildren={
        showBadges && (
          <Stack direction="row" gap={1} sx={{ maxWidth: "100%", overflowX: "clip", overflowY: "hidden" }}>
            {labels && labels.map((label, i) => <Chip key={i} label={label} />)}
          </Stack>
        )
      }
    >
      <Stack direction="row" justifyContent="space-between" alignItems={"center"}>
        <Typography
          variant="h5"
          sx={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}
        >
          {createEmojisFromString(name)}
        </Typography>
        <Badges project={project} />
      </Stack>
      <Typography
        variant="body2"
        color={"grey.800"}
        sx={{
          textOverflow: "ellipsis",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
        }}
      >
        {createEmojisFromString(project.description)}
      </Typography>
    </CustomCardBase>
  );
}
